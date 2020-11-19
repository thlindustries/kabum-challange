import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiEdit2, FiX } from 'react-icons/fi';
import { useToast } from 'hooks/toast';

import api from 'services/api';
import { Container, ItemData, OptionsWrapper } from './styles';

interface TableLineProps {
  item : {[key: string]: number | string};
  refreshData?(): Promise<void>;
}

const TableLine: React.FC<TableLineProps> = ({ item, refreshData }) => {
  const { push } = useHistory();
  const { addToast } = useToast();

  const handleLineAction = useCallback((action: string, id: number | string) => {
    switch (action) {
    case 'edit':
      push(`/updateuser/${id}`)
      break;
    case 'delete':
      api.delete(`/user?id=${id}`).then((response) => {
        console.log(response.data);
        refreshData && refreshData();
        addToast({
          type: 'success',
          title: 'Usuário removido',
          description: 'Hm... você removeu MESMO o usuário :/',
        });
      })
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
