export interface Transaction {
  id: number | string;
  amount: string;
  date: string | Date;
  title: string;
  typeMoney: 'income' | 'outcome';
  category: string;
}
