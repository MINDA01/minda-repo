import { useState } from "react";
import { GradeStar } from '../GradeStar';
import { GradeText } from "../GradeText";
import { ReviewBox} from "./style";

export const Grade = ({hovered, setHovered, clicked, setClicked}) => {
  return (
    <div>
      <h2>이거 어때?</h2>
      <ReviewBox>
        <GradeStar hovered={hovered} setHovered={setHovered} clicked={clicked} setClicked={setClicked}/>
        <GradeText hovered={hovered} />
      </ReviewBox>
    </div>
  )
};
