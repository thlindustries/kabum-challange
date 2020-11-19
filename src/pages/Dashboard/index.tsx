import React, { useEffect, useState, useCallback } from 'react';

import UserInterface from 'models/User';

import Table from 'components/Mols/Table';

import api from 'services/api';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  const getUsers = useCallback(async () => {
    const response = await api.get<UserInterface[]>('/index');
    setUsers(response.data)
  }, [])

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <Container>
      <Table
        items={users}
        refreshData={getUsers}
        title="Tabela de usuários"
        description="Tabela para controle e gerenciamento de usuários "
      />
    </Container>
  )
};

export default Dashboard;
