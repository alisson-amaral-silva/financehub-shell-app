export interface ChartData {
  month: string;
  income: number;
  expenses: number;
}

export interface CategoryExpense {
  name: string;
  value: number;
  color: string;
  percentage: number;
}

export interface WeeklySpending {
  day: string;
  amount: number;
}

export interface BalanceTrend {
  date: string;
  balance: number;
}