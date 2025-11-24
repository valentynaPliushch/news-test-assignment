import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

interface Props {
  size?: number;
}

export const SearchIcon: React.FC<Props> = ({ size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle
      cx="11"
      cy="11"
      r="7"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
    <Line
      x1="16"
      y1="16"
      x2="21"
      y2="21"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);
