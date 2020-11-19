import React, { useState, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FiUser, FiLock, FiMail } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from 'hooks/toast';

import Input from 'components/Atoms/Input';
import Loading from 'components/Atoms/Loading';
import Separator from 'components/Atoms/Separator';

import api from 'services/api';
import {
  Container, ContentWrapper, FormWrapper, InputsContainer, StyledButton,
} from './styles';

interface UpdateUserParams{
  id: number;
}

interface DataFormInfo{
  username: string;
  email: string;
  password: string;
  oldPassword: string;
}

const UpdateUser: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const { addToast } = useToast();
  const { id } = params as UpdateUserParams;

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: DataFormInfo) => {
    setIsLoading(true);
    console.log(id);
    try {
      console.log(data);

      api.put('/user', {
        email: data.email,
        name: data.username,
        oldPassword: data.oldPassword,
        password: data.password,
      }).then((response) => {
        console.log(response.data);

        addToast({
          type: 'success',
          title: 'Boa!',
          description: 'Informações alteradas com sucesso',
        });
      })

      setIsLoading(false);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao alterar informações do usuário',
        description: 'Oops... parece que algo deu errado, confira se seu servidor está rodando!',
      });

      setIsLoading(false);
    }
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ height: '100%' }}>
          <FormWrapper>
            <h3>Editar informações do usuário</h3>
            <Separator type="horizontal" customStyle={{ marginTop: '-40px' }} />
            <InputsContainer>
              <Input
                name="username"
                icon={FiUser}
                placeholder="Seu nome"
                style={{ width: 300 }}
                enabled={!isLoading}
              />
              <Input
                name="email"
                icon={FiMail}
                placeholder="Seu e-mail"
                enabled={!isLoading}
              />
              <Input
                name="oldPassword"
                noEye
                icon={FiLock}
                type="password"
                placeholder="Sua senha atual"
                enabled={!isLoading}
              />
              <Input
                name="password"
                noEye
                icon={FiLock}
                type="password"
                placeholder="Sua nova senha"
                enabled={!isLoading}
              />
            </InputsContainer>
            <StyledButton
              type="submit"
              enabled={!isLoading}
            >
              {isLoading ? <Loading /> : 'Atualizar'}
            </StyledButton>
          </FormWrapper>
        </Form>
      </ContentWrapper>
    </Container>
  )
};

export default UpdateUser;
