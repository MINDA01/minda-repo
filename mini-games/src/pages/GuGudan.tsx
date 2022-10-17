import { useState, useCallback } from "react";

// Math.floor(Math.random() * 최대값 - 최소값) + 최소값)
const GuGudan = () => {
  const [number, setNumber] = useState("");
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState({
    first: Math.floor(Math.random() * 10 - 1 + 1),
    second: Math.floor(Math.random() * 10 - 1 + 1),
  });

  const handleInput = useCallback( (e: React.ChangeEvent<HTMLInputElement>) => {
    let onlyNumber = /^[0-9]+$/;
    if(!onlyNumber.test(e.target.value)){
      alert('숫자만 입력 가능합니다.')
      return false;
    }
    setNumber((e.target.value));
  }, []);

  const handleSubmit = () => {
    const result = question.first * question.second;
    result === Number(number) ? setAnswer("정답입니다.") : setAnswer("실패..");
    setQuestion({
      first: Math.floor(Math.random() * 10 - 1 + 1),
      second: Math.floor(Math.random() * 10 - 1 + 1),
    });
  };

  return (
    <>
      <div className="questions">{`${question.first} 곱하기 ${question.second}는?`}</div>
      <input type="text" value={number} onChange={handleInput} />
      <button onClick={handleSubmit}>입력</button>
      <span>{answer}</span>
    </>
  );
};

export default GuGudan;
