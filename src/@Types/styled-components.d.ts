import Theme from '../Elements/Themes';

interface AllCustomThemes {
  colors: typeof Theme.colors;
  fonts: typeof Theme.fonts;
}

declare module 'styled-components' {
  export interface DefaultTheme extends AllCustomThemes {}
}
