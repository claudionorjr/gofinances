import React from 'react';
import { CustomThemeProvider } from './Theme';
import { TransactionProvider } from './Transaction';

const AppProvider: React.FC = ({ children }) => (
  <CustomThemeProvider>
    <TransactionProvider>{children}</TransactionProvider>
  </CustomThemeProvider>
);

export default AppProvider;
