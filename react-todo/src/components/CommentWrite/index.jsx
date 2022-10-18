import { useRef } from "react";
import { ListWrap, Textarea, Button, Title } from './style';
import { Grade } from '../Grade/index';
import { useRouteLoaderData } from "react-router-dom";

export const CommentWrite = ({hovered, setHovered, clicked, setClicked}) => {
  const nameRef = useRef(null);
  const pwRef = useRef(null);
  const contentRef = useRef(null);

  const createAt = new Intl.DateTimeFormat('kr').format(new Date)

  function handleSubmit(e){
    e.preventDefault()
    
    fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        createAt,
        name: nameRef.current.value,
        pw: pwRef.current.value,
        contents: contentRef.current.value,
        grade: clicked,
        helpNum: 0
      }),
    }).then(res=>{
      if(res.ok){
        alert('등록되었습니다:)')
        location.reload();
      }
    })
  }


  return (
    <div>
      <form>
        <Grade hovered={hovered} setHovered={setHovered} clicked={clicked} setClicked={setClicked}/>
        <Title>어떤 점이 좋았나요?</Title>
        <ListWrap>
          <li>
            <label>
              작성자
              <input type="text" id="name" ref={nameRef}/>
            </label>
          </li>
          <li>
            <label>
              비밀번호
              <input type="text" id="pw" ref={pwRef}/>
            </label>
          </li>
        </ListWrap>
        <Textarea placeholder="여기에 입력하세요" ref={contentRef}></Textarea>
        <Button type="submit" onClick={handleSubmit}>등록하기</Button>
      </form>
    </div>
  );
};
