import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'vertical' | 'horizontal';
}

export const Container = styled.div<ContainerProps>`
  /* background: linear-gradient(black, #707070); */
  background: rgba(0, 0, 0, 0.4);

  margin-bottom: auto;
  margin-left: 20px;

  ${(props) => props.type === 'vertical'
    && css`
      width: 2px;
      height: 60%;
    `}

  ${(props) => props.type === 'horizontal'
    && css`
      height: 1px;
      width: 100%;
      margin: 0;

      background: linear-gradient(
        90deg,
        rgba(157, 163, 186, 0.22) 0%,
        rgba(157, 163, 186, 1) 50%,
        rgba(157, 163, 186, 0.22) 100%
      );
    `}
`;
