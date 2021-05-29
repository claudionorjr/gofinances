import Theme from '../Elements/Themes';

interface AllCustomThemes {
  colors: typeof Theme.colors;
}

declare module 'styled-components' {
  export interface DefaultTheme extends AllCustomThemes {}
}
