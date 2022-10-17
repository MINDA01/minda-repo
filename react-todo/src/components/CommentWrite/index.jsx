import React from "react";
import { ListWrap } from './style';

export const CommentWrite = () => {
  return (
    <div>
      <form>
        <h3>어떤 점이 좋았나요?</h3>
        <ListWrap>
          <li>
            <label>
              작성자
              <input type="text" id="id" />
            </label>
          </li>
          <li>
            <label>
              비밀번호
              <input type="text" id="pw" />
            </label>
          </li>
        </ListWrap>
        <textarea placeholder="여기에 입력하세요"></textarea>
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
};
