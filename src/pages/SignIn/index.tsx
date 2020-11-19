import React, {
  useRef, useCallback, useState,
} from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useAuth } from 'hooks/auth';
import { useToast } from 'hooks/toast';

import getValidationErrors from 'utils/getValidationErrors';

import Input from 'components/Atoms/Input';
import Loading from 'components/Atoms/Loading';

import nlLogo from 'assets/kabum-logo.png';

import {
  Container, ContentWrapper, LoginWrapper, FormWrapper, SignUp, StyledButton,
} from './styles';

interface DataFormInfo {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [isLogging, setIsLogging] = useState(false);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);

  const handleLogin = useCallback(async (data: DataFormInfo) => {
    setIsLogging(true);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Email obrigatório!'),
        password: Yup.string().required('Senha obrigatória!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.username,
        password: data.password,
      });

      window.location.href = '/dashboard';
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
        setIsLogging(false);
      }
    }
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <LoginWrapper>
          <img src={nlLogo} alt="logo" />
          <Form ref={formRef} onSubmit={handleLogin}>
            <FormWrapper>
              <h3>LOGIN</h3>
              <Input
                name="username"
                icon={FiUser}
                placeholder="Digite seu e-mail"
                style={{ width: 300 }}
                enabled={!isLogging}
              />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Sua senha"
                enabled={!isLogging}
              />
              <Link to="/signup">
                <SignUp>Não tem conta? Faça seu cadastro clicando aqui!</SignUp>
              </Link>
              <StyledButton
                type="submit"
                enabled={!isLogging}
              >
                {isLogging ? <Loading /> : 'ENTRAR'}
              </StyledButton>
            </FormWrapper>
          </Form>
        </LoginWrapper>
      </ContentWrapper>
    </Container>
  )
};

export default SignIn;
