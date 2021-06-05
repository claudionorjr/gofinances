export interface Transaction {
  id?: string;
  amount: string;
  date?: Date;
  name: string;
  transactionType: 'income' | 'outcome' | null;
  category: string;
}
