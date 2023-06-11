import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TIcon } from './types';

export const Chevron = ({ color, height = 24, width = 24 }: TIcon) => (
  <Svg viewBox="0 0 24 24" width={width} height={height}>
    <Path
      fill="none"
      stroke={color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.5 5-7 7 7 7"
    />
  </Svg>
);
