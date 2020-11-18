import Axios from 'axios';
import React, {
  useEffect, useRef, useCallback, useState,
} from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from 'components/Atoms/Input';
import Loading from 'components/Atoms/Loading';

import nlLogo from 'assets/kabum-logo.png';

import {
  Container, ContentWrapper, LoginWrapper, FormWrapper, SignUp, StyledButton,
} from './styles';

const SignIn: React.FC = () => {
  const [isLogging, setIsLogging] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleLogin = useCallback(async () => {
    setIsLogging(true);
    // await signIn({ username: 'thiago.coradi', password: '123456' });
    setIsLogging(false);
  }, []);

  useEffect(() => {
    Axios.get('http://localhost:8080/user').then((response) => console.log(response.data))
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
