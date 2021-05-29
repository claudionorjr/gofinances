import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../Elements/Themes';

interface ThemeContextData {
  colors: typeof Theme.colors;
  fonts: typeof Theme.fonts;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const useTheme = () => useContext(ThemeContext);

const CustomThemeProvider: React.FC = ({ children }) => {
  const [colors] = useState(Theme.colors);
  const [fonts] = useState(Theme.fonts);

  return (
    <ThemeContext.Provider value={{ colors, fonts }}>
      <ThemeProvider theme={{ colors, fonts }}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { CustomThemeProvider, useTheme };
