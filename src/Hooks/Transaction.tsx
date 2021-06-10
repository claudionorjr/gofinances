import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import uuid from 'react-native-uuid';
import { Transaction, TotalTransactions } from '../@Types/Transaction';
import { formatDate } from '../Helpers';

interface GetAllTransactions {
  transactions: Transaction[];
  totalTransactions: TotalTransactions;
}

interface TransactionData {
  newTransaction: (data: Transaction) => Promise<void>;
  removeTransaction: (id: string) => Promise<void>;
  getAllTransactions: () => Promise<GetAllTransactions>;
}

const TransactionContext = createContext<TransactionData>(
  {} as TransactionData,
);

const useTransaction = () => useContext(TransactionContext);

const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(
    [] as Transaction[],
  );

  const managerTransactions = async (): Promise<GetAllTransactions> => {
    const response = await AsyncStorage.getItem('@gofinances:transactions');
    console.log('response', response);
    const transactionsArray: Transaction[] = JSON.parse(response!);
    console.log('transactionsArray', transactionsArray);
    setTransactions(transactionsArray);

    let totalTransactions: TotalTransactions = {
      totalIncome: 0,
      totalOutcome: 0,
      total: 0,
    };

    transactionsArray.map(data => {
      if (data.transactionType === 'income') {
        totalTransactions.totalIncome += Number(data.amount);
      } else {
        totalTransactions.totalOutcome += Number(data.amount);
      }
    });
    totalTransactions.total =
      totalTransactions.totalIncome - totalTransactions.totalOutcome;
    return {
      totalTransactions,
      transactions: transactionsArray,
    };
  };

  useEffect(() => {
    managerTransactions();
  }, []);

  const getAllTransactions =
    useCallback(async (): Promise<GetAllTransactions> => {
      const response = await managerTransactions();
      return response;
    }, []);

  const newTransaction = useCallback(
    async (data: Transaction) => {
      const newData: Transaction = {
        id: String(uuid.v4()),
        date: formatDate(new Date()),
        amount: data.amount,
        category: data.category,
        name: data.name,
        transactionType: data.transactionType,
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
      value={{ newTransaction, removeTransaction, getAllTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionProvider, useTransaction };
