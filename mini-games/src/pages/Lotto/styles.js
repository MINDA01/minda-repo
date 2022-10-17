import styled, { css } from 'styled-components';

export const Ball = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  text-align: center;
  line-height: 30px;
  background-color: ${({ number }) => {
    if (number <= 10) {
      return 'red';
    } else if (number <= 20) {
      return 'orange';
    } else if (number <= 30) {
      return 'yellow';
    } else if (number <= 40) {
      return 'blue';
    } else {
      return 'green';
    }
  }};
`;
