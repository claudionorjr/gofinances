import { Categories } from './Categories';

export interface Transaction extends Categories {
  amount: string;
  date: string | Date;
  title: string;
  typeMoney: 'income' | 'outcome';
}
