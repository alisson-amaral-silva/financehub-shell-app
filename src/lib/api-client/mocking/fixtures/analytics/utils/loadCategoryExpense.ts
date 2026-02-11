import { CategoryExpense } from "@/lib/api-client/analytics/types"

export default function loadCategoryExpense() {
  let categoryExpenseList: CategoryExpense[] = [...require('../analytics-categories.json')]
  return categoryExpenseList
}