import React from "react";
import { ListWrap, Textarea, Button, Title } from './style';

export const CommentWrite = () => {
  return (
    <div>
      <form>
        <Title>어떤 점이 좋았나요?</Title>
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
        <Textarea placeholder="여기에 입력하세요"></Textarea>
        <Button type="submit">등록하기</Button>
      </form>
    </div>
  );
};
