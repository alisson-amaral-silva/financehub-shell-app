import { urlTransactions } from "@/lib/api-client/resources";
import { MockList } from "../../types";
import { http, HttpResponse } from "msw";
import { CreateTransactionInput, Transaction } from "@/lib/api-client/transaction/types";
import loadTransactions from './utils/loadTransactions';

const transactionPostHandler: MockList = {
  postTransaction: http.post(urlTransactions, async({request}) => {
    const input = await request.json() as CreateTransactionInput;
    let transactions = loadTransactions()

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      ...input,
      date: new Date(input.date),
      status: 'completed',
    };
    
    transactions.unshift(newTransaction);

    return HttpResponse.json({
      data: newTransaction,
      success: true,
      message: 'Transaction created successfully',
    }, { status: 201 });
  })
}

export default transactionPostHandler