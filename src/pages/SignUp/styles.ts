import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const SignUpWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  height: 300px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  h3{
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: bolder;
    color: #fff;
    letter-spacing: 4px;

    margin-top: -18px;
  }

  a{
    text-decoration: none;
  } 
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
`;
