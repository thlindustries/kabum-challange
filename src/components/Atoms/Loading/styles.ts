import styled from 'styled-components';

export const Container = styled.div`
position: relative;

width: 2rem;
height: 2rem;

span{
  display: block;
  width: 2rem;
  height: 2rem;

  border: 0.2rem solid #e9e9e9;
  border-top: 0.2rem solid #ff4f1d;
  border-right: 0.2rem solid #ff825e;
  border-bottom: 0.2rem solid #ffb099;
  border-left: 0.2rem solid #ffc2b0;

  border-radius: 50%;
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.4);

  box-sizing: border-box;
  top: 0;
  left: 0;

  position: absolute;
}
`;
