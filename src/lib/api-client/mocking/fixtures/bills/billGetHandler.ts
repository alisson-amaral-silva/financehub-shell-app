import { http, HttpResponse } from "msw";
import { MockList } from "../../types";
import { urlBills } from "@/lib/api-client/resources";
import loadBills from "./utils/loadBills";

const billGetHandler: MockList = {
  //Bill by Id
  getAllBills: http.get(urlBills, async () => {
    const bills = loadBills();

    return HttpResponse.json({
      data: bills,
      success: true,
    });
  }),
  getAllUpcomingBills: http.get(urlBills, async () => {
    let bills = loadBills();

    const upcomingBills = bills
      .filter((b) => !b.isPaid)
      .sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      )
      .slice(0, 5);

    return HttpResponse.json({
      data: upcomingBills,
      success: true,
    });
  }),
};

export default billGetHandler;
