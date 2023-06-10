import Svg, { G, Circle, Path } from 'react-native-svg';
import { TIcon } from './types';

export const CloseIcon = ({ color, height = 24, width = 24 }: TIcon) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <G
      fill="none"
      stroke={color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}>
      <Circle cx={12} cy={12} r={10} data-name="--Circle" />
      <Path d="m14.5 9.5-5 5M14.5 14.5l-5-5" />
    </G>
  </Svg>
);
