import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { StatusBar } from 'react-native';
import Dashboard from './Screens/Dashboard';
import { AppProvider } from './Hooks';
import Register from './Screens/Register';

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AppProvider>
      <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
      <Register />
    </AppProvider>
  );
};

export default App;
