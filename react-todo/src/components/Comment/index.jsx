import React,{ useState } from "react";
import { ReviewInfo, ReviewContents, ButtonBox, Button } from './style'

export const Comment = ({ data :d }) => {
  const [data, setData] = useState(d)
  const [isModify, setIsModify] = useState(false);
  const [textValue, setTextValue] = useState(data.contents)

  const gradeArr = Array(data.grade).fill().map((v,i)=>i+1)

  function toggleModify(e){
    if(e.target.innerText === '확인'){
      console.log('확인버튼 누름')
      fetch(`http://localhost:3001/users/${data.id}`, {
        method:'PUT',
        headers: {
          'Content-Type':'application/json',
        },
        body : JSON.stringify({
          ...data,
          contents: textValue
        }),
      }).then(res => {
        if(res.ok) {
          alert('수정되었습니다')
        }
      })
    } else {
      const pass = prompt('비밀번호를 입력해주세요','비밀번호 입력');
      if(pass === data.pw){
        setIsModify(!isModify)
      } else{
        alert('비밀번호가 다른데요?')
      }
    }
  }

  function handleDelete () {
    if(window.confirm('진짜 삭제 하시겠습니까?')){
      fetch(`http://localhost:3001/users/${data.id}`,{
        method: 'DELETE',
      }).then (res => {
        if(res.ok){
          setData({id:0})
        }
      })
    }
  }

  function handleHelp(){
    fetch(`http://localhost:3001/users/${data.id}`, {
        method:'PUT',
        headers: {
          'Content-Type':'application/json',
        },
        body : JSON.stringify({
          ...data,
          helpNum: data.helpNum+1
        }),
      })
  }

  if(data.id === 0) return null;

  function handleChange (e) {
    setTextValue(e.target.value)
  }
  

  return (
    <li>
      <ReviewInfo>
        <div>
           <span>{data.name}</span>
           {gradeArr.map((_, index)=>{
            return(
              <i key={index} className="fas fa-star yellowStar" />
            )
           })}
        </div>
        <span>{data.createAt}</span>
      </ReviewInfo>
      <ReviewContents>{isModify?<textarea onChange={handleChange} value={textValue}></textarea>:textValue}</ReviewContents>
      <ButtonBox>
        <div>
          {data.helpNum !== 0 && <i className='fas fa-heart'>{data.helpNum}</i>}
        </div>
        <div>
          <button onClick={toggleModify}>{isModify?'확인':'수정'}</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
        
      </ButtonBox>
      <Button onClick={handleHelp}>도움돼요</Button>
    </li>
  );
};
