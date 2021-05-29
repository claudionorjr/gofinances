import React from 'react';
import { CustomThemeProvider } from './Theme';

const AppProvider: React.FC = ({ children }) => (
  <CustomThemeProvider>{children}</CustomThemeProvider>
);

export default AppProvider;
