export interface Transaction {
  id?: string;
  amount: string;
  date?: string;
  name: string;
  transactionType: 'income' | 'outcome' | null;
  category: string;
}

export interface TotalTransactions {
  totalIncome: number;
  totalOutcome: number;
  total: number;
}
