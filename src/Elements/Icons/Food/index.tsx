import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { normalizePixel } from '../../../Helpers';
import { useTheme } from '../../../Hooks';

interface SvgProps {
  size?: number;
  height?: number;
  width?: number;
  color?: string;
  testID?: string;
}

const Food = ({ color, width = 24, height = 24, size, testID }: SvgProps) => {
  const { colors } = useTheme();
  return (
    <Svg
      testID={testID}
      width={normalizePixel(size || width)}
      height={normalizePixel(size || height)}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M15 6.66669H15.8333C16.7174 6.66669 17.5652 7.01788 18.1904 7.643C18.8155 8.26812 19.1667 9.11597 19.1667 10C19.1667 10.8841 18.8155 11.7319 18.1904 12.357C17.5652 12.9822 16.7174 13.3334 15.8333 13.3334H15"
        stroke={color || colors.text}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.66669 6.66669H15V14.1667C15 15.0507 14.6488 15.8986 14.0237 16.5237C13.3986 17.1488 12.5507 17.5 11.6667 17.5H5.00002C4.11597 17.5 3.26812 17.1488 2.643 16.5237C2.01788 15.8986 1.66669 15.0507 1.66669 14.1667V6.66669Z"
        stroke={color || colors.text}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 0.833313V3.33331"
        stroke={color || colors.text}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.33331 0.833313V3.33331"
        stroke={color || colors.text}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.6667 0.833313V3.33331"
        stroke={color || colors.text}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Food;
