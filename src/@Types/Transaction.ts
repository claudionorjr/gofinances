import { Categories } from './Categories';

export interface Transaction extends Categories {
  id: number | string;
  amount: string;
  date: string | Date;
  title: string;
  typeMoney: 'income' | 'outcome';
}
