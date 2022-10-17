import styled from "styled-components";

export const ReviewTop = styled.div`
  padding-bottom: 5px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1a1a1a;
  h4 {
    margin: 0;
  }
  select {
    height: 22px;
  }
`;

export const ReviewList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  li {
    border-bottom: 1px solid #1a1a1a;
  }
`;

export const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

export const ReviewContents = styled.div`
  text-align: left;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  button {
    background-color: transparent;
    padding: 0;
    margin-right: 15px;
    border: 0 none;
    :last-child {
      margin-right: 0px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: transparent;
  border-top: 1px solid #1a1a1a;
  border-right: 0 none;
  border-left: 0 none;
  border-radius: 0;
`;
