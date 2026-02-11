import { ChartData } from "@/lib/api-client/analytics/types"

export default function loadExpenseList() {
  let incomeExpenseList: ChartData[] = [...require('../analytics-income-expenses.json')]
  return incomeExpenseList
}