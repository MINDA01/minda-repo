import styled, { css } from 'styled-components';

export const BoardRow = styled.div`
  display: grid;
  width: 200px;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  border: 1px solid #ddd;
  //   grid-template-columns: repeat(3, 1fr);
  //   grid-template-rows: repeat(3, 1fr);
`;

export const Button = styled.button`
  background: lightblue;
  border: 2px solid darkblue;
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  outline: none;
`;
