import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 900px;
  height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;
  padding: 20px;

  background: rgba(0,0,0,0.2);
`;

export const FormWrapper = styled.div`
  height: 100%;

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
  }

  a{
    text-decoration: none;
  } 
`;

export const InputsContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
`;
