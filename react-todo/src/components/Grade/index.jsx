import React, { useState } from "react";
import { textList , ReviewBox , ReviewTextBox , StarContainer , HiddenText } from "./style";

export const Grade = () => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  return (
    <div>
      <h3>이 상품 어때요?</h3>
      <ReviewBox>
       <StarContainer>
        {[1, 2, 3, 4, 5].map(el => (
          <i
            className={`fas fa-star ${
              (clicked >= el) | (hovered >= el) && 'yellowStar'
            }`}
            key={el}
            onMouseEnter={() => setHovered(el)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setClicked(el)}
          />
        ))}
         </StarContainer>
        <ReviewTextBox>
        {[1, 2, 3, 4, 5].map(num => (
          <HiddenText key={num} show={hovered === num}>
            {textList[num - 1]}
          </HiddenText>
        ))}
        </ReviewTextBox>
      </ReviewBox>
    </div>
  )
};
