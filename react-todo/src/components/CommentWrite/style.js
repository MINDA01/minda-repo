import styled from "styled-components";

export const Title = styled.h3`
  text-align: left;
`;

export const ListWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  li {
    label input {
      width: 100px;
      margin: 0 10px;
    }
    :last-child label input {
      margin-right: 0;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 6px 4px;
  min-height: 100px;
  box-sizing: border-box;
  resize: none;
`;

export const Button = styled.button`
  width: 100%;
`;
