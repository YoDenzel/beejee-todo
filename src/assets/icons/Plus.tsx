import Svg, { G, Path } from 'react-native-svg';

import { TIcon } from './types';

export const Plus = ({ color, width = 48, height = 48 }: TIcon) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <G
      fill="none"
      stroke={color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      data-name="add">
      <Path d="M12 19V5M5 12h14" />
    </G>
  </Svg>
);
