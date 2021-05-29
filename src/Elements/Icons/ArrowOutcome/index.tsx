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

const ArrowOutcome = ({
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
        d="M19.9999 36.6667C29.2047 36.6667 36.6666 29.2047 36.6666 20C36.6666 10.7953 29.2047 3.33334 19.9999 3.33333C10.7952 3.33333 3.33325 10.7953 3.33325 20C3.33325 29.2047 10.7952 36.6667 19.9999 36.6667Z"
        stroke={color || colors.attention}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3333 20L19.9999 26.6667L26.6666 20"
        stroke={color || colors.attention}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 13.3333L20 26.6667"
        stroke={color || colors.attention}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowOutcome;
