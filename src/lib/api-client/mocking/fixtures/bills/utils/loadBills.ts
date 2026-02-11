import { Bill } from "@/lib/api-client/bill/types";

export default function loadBills() {
  let bills: Bill[] = [...require('../bills.json')]
  return bills
}