import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  position: relative;

  height: 60px;
  padding: 24px;
  margin-top: 10px;

  background: #a9b2c9;
  border: solid 2px #303030;
  border-radius: 4px;

  font-family: 'Raleway';
  color: #2e2e2e;

  transition: .4s;

  h4{
    font-weight: lighter;
    margin-bottom: 4px;
  }

  &:hover{
    background: ${shade(0.4, '#535a6c')};
    transform: scaleX(1.02) scaleY(1.05);
    color: #fff;
  }
`;

export const ItemData = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;

  .edit{
    color: #ffdfd6;
    transition: 0.4s;

    &:hover{
      cursor: pointer;
      color: ${shade(0.2, '#000')}
    }
  }

  .remove{
    color: #ff7a7a;
    transition: 0.4s;

    &:hover{
      cursor: pointer;
      color: ${shade(0.4, '#940000')}
    }
  }
`;
