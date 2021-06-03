import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
import Register from '../Screens/Register';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Navigator>
      <Screen name="Listagem" component={Dashboard} />
      <Screen name="Cadastrar" component={Register} />
      <Screen name="Resumo" component={Register} />
    </Navigator>
  );
};

export default AppRoutes;
