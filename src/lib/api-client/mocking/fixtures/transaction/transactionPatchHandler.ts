import { urlTransactionById } from "@/lib/api-client/resources";
import { MockList } from "../../types";
import { http, HttpResponse } from "msw";
import {
  CreateTransactionInput,
} from "@/lib/api-client/transaction/types";
import loadTransactions from "./utils/loadTransactions";

const transactionPatchHandler: MockList = {
  patchTransaction: http.post(
    urlTransactionById,
    async ({ request, params: { id } }) => {
      const updates = (await request.json()) as CreateTransactionInput;
      let transactions = loadTransactions();
      const index = transactions.findIndex((t) => t.id === id);

      if (index === -1) {
        return HttpResponse.json(
          { success: false, message: "Transaction not found" },
          { status: 404 }
        );
      }

      transactions[index] = { ...transactions[index], ...updates };

      return HttpResponse.json({
        data: transactions[index],
        success: true,
        message: "Transaction updated successfully",
      });
    }
  ),
};

export default transactionPatchHandler;
