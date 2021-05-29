import React from 'react';

import Dashboard from './Screens/Dashboard';
import { AppProvider } from './Hooks';

const App = () => (
  <AppProvider>
    <Dashboard />
  </AppProvider>
);

export default App;
