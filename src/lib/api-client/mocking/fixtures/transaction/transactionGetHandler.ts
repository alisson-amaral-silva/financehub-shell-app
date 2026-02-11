import { http, HttpResponse } from "msw";
import { MockList } from "../../types";
import { urlTransactionById } from "@/lib/api-client/resources";
import loadTransactions from "./utils/loadTransactions";

const transactionGetHandler: MockList = {
  //Transaction by Id
  byId: http.get(urlTransactionById, async ({ params: { id } }) => {
    const transactions = loadTransactions();
    const transactionById = transactions.find((t) => t.id === id);

    if (!transactionById) {
      return HttpResponse.json(
        { success: false, message: "Transaction not found" },
        { status: 404 }
      );
    }

    return HttpResponse.json({
      data: transactionById,
      success: true,
    });
  }),
};


export default transactionGetHandler;
