import { ChartData } from "@/lib/api-client/analytics/types"

export default function loadWeeklySpending() {
  let weeklySpendingList: ChartData[] = [...require('../analytics-weekly-spending.json')]
  return weeklySpendingList
}