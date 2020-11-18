import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  enabled?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: #ff6033;
  border-radius: 10px;
  height: 56px;
  border: 0;
  padding: 0 16px;
  width: 100%;

  font-weight: 500;

  box-shadow: 0 10px 20px rgba(0,0,0,0.4);

  margin-top: 16px;
  transition: background-color 0.2s;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  &:hover {
    background: ${shade(0.4, '#ff6033')};
    cursor: pointer;
  }

  ${(props) => props.enabled === false
    && css`
      opacity: 0.4;
      pointer-events: none;
    `}
`;
