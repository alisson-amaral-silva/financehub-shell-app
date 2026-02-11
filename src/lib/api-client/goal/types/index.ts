export interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  color: string;
  icon: string;
}

export interface CreateGoalInput {
  title: string;
  targetAmount: number;
  deadline: Date;
  color?: string;
}