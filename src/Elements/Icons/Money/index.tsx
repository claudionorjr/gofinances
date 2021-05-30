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

const Money = ({ color, width = 40, height = 40, size, testID }: SvgProps) => {
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
        d="M20 1.6666V38.3333"
        stroke={color || colors.text}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M28.3333 8.3334H15.8333C14.2862 8.3334 12.8025 8.94798 11.7085 10.0419C10.6146 11.1359 10 12.6196 10 14.1667C10 15.7138 10.6146 17.1976 11.7085 18.2915C12.8025 19.3855 14.2862 20.0001 15.8333 20.0001H24.1667C25.7138 20.0001 27.1975 20.6147 28.2915 21.7086C29.3854 22.8026 30 24.2863 30 25.8334C30 27.3805 29.3854 28.8642 28.2915 29.9582C27.1975 31.0522 25.7138 31.6667 24.1667 31.6667H10"
        stroke={color || colors.text}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Money;
