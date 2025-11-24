import React from 'react';
import Svg, { Line } from 'react-native-svg';

interface Props {
  size?: number;
  stroke?: string;
}

export const PlusIcon: React.FC<Props> = ({ size = 24, stroke = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Line
      x1="12"
      y1="5"
      x2="12"
      y2="19"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Line
      x1="5"
      y1="12"
      x2="19"
      y2="12"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);
