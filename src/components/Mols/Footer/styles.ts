import styled from 'styled-components';

export const Container = styled.div`
  height: 120px;
  color: #fff;

  a{
    text-decoration: none;
    color: #fff;

    transition: .4s;

    &::before{
      content: ".   ";
      font-weight: bolder;
      font-size: 18px;
    }

    &:hover{
      transform: scaleX(1.02) scaleY(1.02);
      color: rgba(255,255,255,0.4);
    }
  }

  p{
    &::before{
      content: ".   ";
      font-weight: bolder;
      font-size: 18px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 300px;
  
  font-family: 'Raleway';
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;

  h3{
    margin-bottom: 4px;
    color: #000;
  }
`;
