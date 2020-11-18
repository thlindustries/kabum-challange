import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  padding: 0 20px 20px 20px;

  border-radius: 6px;

  box-shadow: 0 0 10px rgba(0,0,0,0.4);

  background: rgba(0,0,0,0.2);

  max-height: 660px;
  min-width: 600px;

  overflow: scroll;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;

  font-family: 'Raleway';
  color: #ffcfc2;

  h3{
    font-weight: bolder;
    font-size: 24px;
  }
  p{
    color: #fff;
  }
`;
