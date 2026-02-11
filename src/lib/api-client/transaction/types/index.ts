export type TransactionCategory =
  | 'salary'
  | 'freelance'
  | 'investment'
  | 'food'
  | 'shopping'
  | 'transport'
  | 'entertainment'
  | 'bills'
  | 'health'
  | 'education'
  | 'travel'
  | 'other';

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: TransactionCategory;
  date: Date;
  icon?: string;
  status: 'completed' | 'pending' | 'failed';
}


// Filter types
export interface TransactionFilters {
  type?: 'income' | 'expense' | 'all';
  category?: TransactionCategory;
  startDate?: Date;
  endDate?: Date;
  search?: string;
}

// Form types
export interface CreateTransactionInput {
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: TransactionCategory;
  date: Date;
}