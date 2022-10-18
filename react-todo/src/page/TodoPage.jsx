import { useState } from "react";
import { CommentBox } from '../components/CommentBox';
import { CommentWrite } from '../components/CommentWrite';

export const TodoPage = () => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  return (
    <>
      <CommentWrite hovered={hovered} setHovered={setHovered} clicked={clicked} setClicked={setClicked}/>
      <CommentBox />
    </>
  )
}
