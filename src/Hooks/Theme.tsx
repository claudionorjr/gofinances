import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../Elements/Themes';

interface ThemeContextData {
  colors: typeof Theme.colors;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const useTheme = () => useContext(ThemeContext);

const CustomThemeProvider: React.FC = ({ children }) => {
  const [colors] = useState(Theme.colors);

  return (
    <ThemeContext.Provider value={{ colors }}>
      <ThemeProvider theme={{ colors }}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { CustomThemeProvider, useTheme };
