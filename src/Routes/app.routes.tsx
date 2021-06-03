import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Dashboard from '../Screens/Dashboard';
import Register from '../Screens/Register';
import { useTheme } from '../Hooks';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
  const { colors } = useTheme();
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.text,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              size={size}
              name="format-list-bulleted"
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} name="attach-money" color={color} />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} name="pie-chart" color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
