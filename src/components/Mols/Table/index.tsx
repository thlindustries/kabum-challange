import React from 'react';

import TableLine from 'components/Atoms/TableLine';

import { Container, Heading } from './styles';

interface TableProps{
  items: Array<{
    id: number;
    name: string;
    email: string;
  }>
  title?: string;
  description?: string;
}

const Table: React.FC<TableProps> = ({ items, title = 'Tabela default', description = 'description' }) => {
  console.log(items);

  return (
    <Container className="hasVerticalScroll">
      <Heading>
        <h3>{title}</h3>
        <p>{description}</p>
      </Heading>
      {items.map((item) => (
        <TableLine key={item.id} item={item} />
      ))}
    </Container>
  )
}

export default Table;
