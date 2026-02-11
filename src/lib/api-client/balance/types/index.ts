export interface Balance {
  total: number;
  income: number;
  expenses: number;
  percentageChange: {
    total: number;
    income: number;
    expenses: number;
  };
}