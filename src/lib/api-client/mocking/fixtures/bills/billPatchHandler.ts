import { urlPayBills } from "@/lib/api-client/resources";
import { MockList } from "../../types";
import { http, HttpResponse } from "msw";
import loadBills from "./utils/loadBills";

const billPatchHandler: MockList = {
  patchBill: http.post(urlPayBills, async ({  params: { id } }) => {
    let bills = loadBills();
    const index = bills.findIndex((g) => g.id === id);
    if (index === -1) {
      return HttpResponse.json(
        { success: false, message: 'Bill not found' },
        { status: 404 }
      );
    }

    bills[index] = { ...bills[index], isPaid: true };

    return HttpResponse.json({
      data: bills[index],
      success: true,
      message: 'Bill paid successfully',
    });
  }),
};

export default billPatchHandler;
