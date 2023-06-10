import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TIcon } from './types';

export const Tick = ({ height = 24, width = 24, color }: TIcon) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path
      fill="none"
      stroke={color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.7 14.3 9.6 19 20.3 5"
    />
  </Svg>
);
