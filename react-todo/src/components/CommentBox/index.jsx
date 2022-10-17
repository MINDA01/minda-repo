import React from "react";
import { ReviewTop, ReviewList, ReviewInfo, ReviewContents,ButtonBox, Button} from './style'

export const CommentBox = () => {
  return (
    <div>
      <ReviewTop>
        <h4>리뷰</h4>
        <select>
          <option value='latest'>최신순</option>
          <option value='high'>높은평점순</option>
          <option value='lower'>낮은평점순</option>
        </select>
      </ReviewTop>
      <ReviewList>
        <li>
          <ReviewInfo>
              <span>MINDA01</span>
              <span>2022. 09. 16</span>
          </ReviewInfo>
          <ReviewContents>ㅋㄷㅋㄷㅋㄷㅋㄷㅋㄷ</ReviewContents>
          <ButtonBox>
            <button>수정</button>
            <button>삭제</button>
          </ButtonBox>
          <Button>도움돼요</Button>
        </li>
      </ReviewList>
    </div>
  );
};
