import React from 'react';

import { Container } from './styles';

interface SeparatorProps {
  type?: 'vertical' | 'horizontal';
}

const Separator: React.FC<SeparatorProps> = ({ type = 'vertical' }) => (
  <Container type={type} />
);

export default Separator;
