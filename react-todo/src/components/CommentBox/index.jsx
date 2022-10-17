import React from "react";

export const CommentBox = () => {
  return (
    <div>
      <h4>리뷰</h4>
      <select>
        <option value='latest'>최신순</option>
        <option value='high'>높은평점순</option>
        <option value='lower'>낮은평점순</option>
      </select>
      <ul>
        <li>
          <div>
              <span>MINDA01</span>
              <span>2022. 09. 16</span>
          </div>
          <p>ㅋㄷㅋㄷㅋㄷㅋㄷㅋㄷ</p>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
          <button>도움돼요</button>
        </li>
      </ul>
    </div>
  );
};
