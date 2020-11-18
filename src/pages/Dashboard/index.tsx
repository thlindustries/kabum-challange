import React from 'react';

import Table from 'components/Mols/Table';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const userList = [
    { id: 1, name: 'Thiago', email: 'tkraetzer@kabum.com.br' },
    { id: 2, name: 'Thiago2', email: 'tkraetzer2@kabum.com.br' },
    { id: 3, name: 'Thiago3', email: 'tkraetzer3@kabum.com.br' },
    { id: 4, name: 'Thiago4', email: 'tkraetzer4@kabum.com.br' },
    { id: 5, name: 'Thiago5', email: 'tkraetzer5@kabum.com.br' },
    { id: 6, name: 'Thiago6', email: 'tkraetzer6@kabum.com.br' },
    { id: 7, name: 'Thiago7', email: 'tkraetzer7@kabum.com.br' },
    { id: 8, name: 'Thiago8', email: 'tkraetzer8@kabum.com.br' },
    { id: 9, name: 'Thiago9', email: 'tkraetzer9@kabum.com.br' },
    { id: 10, name: 'Thiago10', email: 'tkraetzer10@kabum.com.br' },
    { id: 11, name: 'Thiago11', email: 'tkraetzer11@kabum.com.br' },
  ];

  return (
    <Container>
      <Table items={userList} title="Tabela de usuários" description="Tabela para controle e gerenciamento de usuários " />
    </Container>
  )
};

export default Dashboard;
