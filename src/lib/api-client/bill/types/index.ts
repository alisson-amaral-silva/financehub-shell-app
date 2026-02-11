export interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: Date;
  category: string;
  isPaid: boolean;
  isRecurring: boolean;
  icon?: string;
}