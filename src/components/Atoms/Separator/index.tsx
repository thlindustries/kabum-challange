import React from 'react';

import { Container } from './styles';

interface SeparatorProps {
  type?: 'vertical' | 'horizontal';
  customHeight?: number;
  customWidth?: number;
  customColor?: string;
  customStyle?: {[key: string]: number | string};
}

const Separator: React.FC<SeparatorProps> = (
  {
    type = 'vertical',
    customHeight = 60,
    customWidth = 100,
    customColor,
    customStyle,
  },
) => (
  <Container
    type={type}
    customHeight={customHeight}
    customWidth={customWidth}
    customColor={customColor}
    style={customStyle && customStyle}
  />
);

export default Separator;
