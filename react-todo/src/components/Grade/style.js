import styled from "styled-components";

export const textList = [
  "별로에요",
  "그저 그래요",
  "보통이에요",
  "좋아요",
  "최고예요",
];

export const ReviewBox = styled.div`
  color: #999;
  font-size: 20px;
  i {
    margin: 20px 10px 20px 0;
    opacity: 0.1;
    cursor: pointer;
    font-size: 50px;
  }

  .yellowStar {
    color: orange;
    opacity: 1;
  }
`;

export const ReviewTextBox = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 30px;
`;

export const StarContainer = styled.div`
  text-align: center;
  border: none;
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
