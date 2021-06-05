import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import uuid from 'react-native-uuid';
import { Transaction } from '../@Types/Transaction';

interface TransactionData {
  newTransaction: (data: Transaction) => Promise<void>;
  removeTransaction: (id: string) => Promise<void>;
  transactions: Transaction[];
}

const TransactionContext = createContext<TransactionData>(
  {} as TransactionData,
);

const useTransaction = () => useContext(TransactionContext);

const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(
    [] as Transaction[],
  );

  useEffect(() => {
    async function loadData() {
      const result = await AsyncStorage.getItem('@gofinances:transactions');
      setTransactions(JSON.parse(result!));
    }
    loadData();
  }, []);

  const newTransaction = useCallback(
    async (data: Transaction) => {
      const newData: Transaction = {
        id: String(uuid.v4()),
        date: new Date(),
        ...data,
      };
      await AsyncStorage.setItem(
        '@gofinances:transactions',
        JSON.stringify(
          transactions == null ? [newData] : [...transactions, newData],
        ),
      );
    },
    [transactions],
  );

  const removeTransaction = useCallback(
    async (id: string) => {
      const newArrayTransactions = transactions.filter(item => item.id !== id);
      setTransactions(newArrayTransactions);
      await AsyncStorage.setItem(
        '@gofinances:transactions',
        JSON.stringify(newArrayTransactions),
      );
    },
    [transactions],
  );

  return (
    <TransactionContext.Provider
      value={{ newTransaction, removeTransaction, transactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionProvider, useTransaction };
