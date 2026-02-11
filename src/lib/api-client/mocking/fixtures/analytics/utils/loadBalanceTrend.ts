import { BalanceTrend } from "@/lib/api-client/analytics/types"

export default function loadBalanceTrend() {
  let balanceTrendList: BalanceTrend[] = [...require('../analytics-balance-trend.json')]
  return balanceTrendList
}