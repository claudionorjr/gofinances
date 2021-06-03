import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';
import { AppProvider } from './Hooks';
import AppRoutes from './Routes/app.routes';

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
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
