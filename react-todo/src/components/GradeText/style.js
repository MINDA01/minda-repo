import styled from "styled-components";

export const textList = [
  "1점 별로에요",
  "2점 그저 그래요",
  "3점 보통이에요",
  "4점 좋아요",
  "5점 최고예요",
];

export const ReviewTextBox = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 30px;
`;

export const HiddenText = styled.p`
  position: absolute;
  top: 0px;
  left: 50%;
  width: 130px;
  height: 30px;
  padding-top: 7px;
  transform: translate(-50%, -50%);
  color: white;
  border-radius: 4px;
  font-size: 16px;

  ${({ show }) => (show ? `display:block` : `display: none`)}
`;
