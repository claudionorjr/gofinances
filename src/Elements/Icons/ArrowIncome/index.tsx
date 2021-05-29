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

const ArrowIncome = ({
  color,
  width = 40,
  height = 40,
  size,
  testID,
}: SvgProps) => {
  const { colors } = useTheme();
  return (
    <Svg
      testID={testID}
      width={normalizePixel(size || width)}
      height={normalizePixel(size || height)}
      viewBox="0 0 40 40"
      fill="none"
    >
      <Path
        d="M20.0001 3.33333C10.7953 3.33333 3.33342 10.7953 3.33342 20C3.33342 29.2047 10.7953 36.6667 20.0001 36.6667C29.2048 36.6667 36.6667 29.2047 36.6667 20C36.6667 10.7952 29.2048 3.33333 20.0001 3.33333Z"
        stroke={color || colors.success}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M26.6667 20L20.0001 13.3333L13.3334 20"
        stroke={color || colors.success}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20 26.6667L20 13.3333"
        stroke={color || colors.success}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ArrowIncome;
