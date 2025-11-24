import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
}

export const ArrowBackIcon: React.FC<Props> = ({
  size = 24,
  stroke = '#000',
  strokeWidth = 2,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M15 6 L9 12 L15 18"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
