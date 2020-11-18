import React, { useState, useCallback, useRef } from 'react';
import { FiUser, FiLock, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from 'hooks/toast';
import getValidationErrors from 'utils/getValidationErrors';

import Input from 'components/Atoms/Input';
import Loading from 'components/Atoms/Loading';

import {
  Container, SignUpWrapper, FormWrapper, StyledButton,
} from './styles';

interface DataFormInfo {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: DataFormInfo) => {
    setIsLoading(true);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Nome obrigatório!'),
        email: Yup.string().required('Email obrigatório!'),
        password: Yup.string().required('Senha obrigatória!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // const response = await api.get(`/users/${data.userName}/repos`);

      // setUserRepos(response.data);
      setIsLoading(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      } else {
        addToast({
          type: 'error',
          title: 'Erro ao cadastrar usuário',
          description: 'Oops... parece que algo deu errado, confira se seu servidor está rodando!',
        });
      }

      setIsLoading(false);
    }
  }, []);

  return (
    <Container>
      <SignUpWrapper>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormWrapper>
            <h3>Cadastro</h3>
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
              name="password"
              noEye
              icon={FiLock}
              type="password"
              placeholder="Sua senha"
              enabled={!isLoading}
            />
            <StyledButton
              type="submit"
              enabled={!isLoading}
            >
              {isLoading ? <Loading /> : 'CADASTRAR'}
            </StyledButton>
          </FormWrapper>
        </Form>
      </SignUpWrapper>
    </Container>
  )
};

export default SignUp;
