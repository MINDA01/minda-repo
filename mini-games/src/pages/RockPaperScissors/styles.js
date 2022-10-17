import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.black};
  `}
`;

export const ImgWapper = styled.div`
  width: 120px;
  height: 150px;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 150px;

  &.rspX {
    ${({ rspX }) => `margin-left:${rspX};`}
    background: red;
  }
`;

// margin-left: ${(props) => props.rspX} 왜 이거는 안돼?
