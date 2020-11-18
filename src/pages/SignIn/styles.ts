import styled from 'styled-components';
import Button from 'components/Atoms/Button';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ContentWrapper = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  height: 56%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8%;

  img{
    height: 160px;
    margin-bottom: 8%;
  }
`;

export const FormWrapper = styled.div`
  height: 300px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  h3{
    font-family: 'Raleway', sans-serif;
    font-size: 26px;
    font-weight: lighter;
    color: #353536;
    letter-spacing: 4px;
  }

  a{
    text-decoration: none;
  } 
`;

export const SignUp = styled.p`
  font-weight: bolder;
  font-size: 14px;
  margin-top: 8px;

  color: #fff;

  transition: .4s;

  &:hover{
    color: ${shade(0.7, '#fff')};
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
`;
