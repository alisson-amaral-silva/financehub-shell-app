import { urlTransactionById } from "@/lib/api-client/resources";
import { MockList } from "../../types";
import { http, HttpResponse } from "msw";
import loadTransactions from "./utils/loadTransactions";

const transactionDeleteHandler: MockList = {
  deleteTransaction: http.delete(urlTransactionById,  async ({ params: { id } }) => {
    let transactions = loadTransactions();

    const index = transactions.findIndex(t => t.id === id);
    if (index === -1) {
      return HttpResponse.json(
        { success: false, message: 'Transaction not found' },
        { status: 404 }
      );
  }})
}

export default transactionDeleteHandler