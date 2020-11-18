import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface OptionProps {
  tabIsSelected?: boolean;
}

interface WrapperProps {
  isCollapsed?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-left: auto;
  height: auto;
  width: 50%;
  padding: 12px;

  border-radius: 12px;

  transition: width 0.2s;

  @media (max-width: 1270px){
    width: 120px;
    display: block;
  }
`;

export const MenuWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 180px;

  margin-left: auto;
  height: 30px;
  padding: 12px;

  border-radius: 12px;

  a {
    text-decoration: none;
  }

  p {
    color: #E9EAED;

    transition: color 0.4s;

    font-family: 'Fira Sans', sans-serif;
    margin-left: auto;

    &:hover {
      cursor: pointer;
      color: ${shade(0.4, '#E9EAED')};
    }
  }

  .collapsed-icon {
    display: none;
  }

  transition: height 0.4s;

  @media (max-width: 1270px){
    overflow: hidden;
    margin-top: -20px;

    p{
      margin-right: auto;
    }
    ${(props) => !props.isCollapsed && css`
      position: absolute;

      box-shadow: 0 0 10px rgba(255,255,255,0.1);
      background: rgba(0,0,0,0.08);

      width: 160px;
      height: 100px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p{
        margin-bottom: 16px;

        &::before{
          content: ">  ";
          margin-left: -12px;
        }
      }

    `}
    ${(props) => props.isCollapsed && css`
      position: absolute;

      width: auto;
      height: 60px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .logo-option{
        display: none;
        margin-bottom: 12px;
      }

      .collapsed-icon{
        display: block;
      }
      p{
        text-align: center;
      }
    `}
  }
`;

export const CollapsedMenu = styled.div`
  .bar{
    display: none;
    @media(max-width: 1270px){
      width: 44px;
      height: 2px;
      background: white;

      display:flex;
      flex-direction:column;

      margin-bottom: 12px;

      display: block;
    }
  }
`;

export const Option = styled.p<OptionProps>`
  font-size: 16px;

  ${(props) => props.tabIsSelected
    && css`
    font-size: 18px;
    border-bottom: 1.4px solid #fff;
  `}
`;
