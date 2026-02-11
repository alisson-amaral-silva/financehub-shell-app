import { Transaction } from "@/lib/api-client/transaction/types";

export default function loadTransactions() {
  let transactions: Transaction[] = [...require('../transactions.json')]
  return transactions
}