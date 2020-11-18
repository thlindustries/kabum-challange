import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiEdit2, FiX } from 'react-icons/fi';

import { Container, ItemData, OptionsWrapper } from './styles';

interface TableLineProps {
  item : {[key: string]: number | string};
}

const TableLine: React.FC<TableLineProps> = ({ item }) => {
  const { push } = useHistory();

  const handleLineAction = useCallback((action: string, id: number | string) => {
    switch (action) {
    case 'edit':
      push(`/updateuser/${id}`)
      console.log(`voce quer editar o usuario de id ${id}?`);
      break;
    case 'delete':
      console.log(`voce quer deletar o usuario de id ${id}?`);
      break;
    default:
      break;
    }
  }, [])

  return (
    <Container>
      <ItemData>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.email}</p>
      </ItemData>
      <OptionsWrapper>
        <FiEdit2 className="edit" size={20} onClick={() => handleLineAction('edit', item.id)} />
        <FiX className="remove" size={20} onClick={() => handleLineAction('delete', item.id)} />
      </OptionsWrapper>
    </Container>
  )
};

export default TableLine;
