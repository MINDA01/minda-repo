import styled from "styled-components";

export const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  > div span {
    margin-right: 5px;
  }
  .yellowStar {
    font-size: 0.9rem;
    color: orange;
    opacity: 1;
  }
`;

export const ReviewContents = styled.div`
  text-align: left;
  textarea {
    width: 100%;
    resize: none;
    box-sizing: border-box;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  div i {
    font-size: 0.7rem;
    vertical-align: middle;
  }
  div i:before {
    margin-right: 5px;
    font-size: 0.9rem;
  }
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
