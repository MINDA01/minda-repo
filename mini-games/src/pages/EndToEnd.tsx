import { useState } from 'react';

const EndToEnd = () => {
  const [string, setString] = useState('');
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('리액트');

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setString(e.target.value);
  };

  const handleSubmit = () => {
    console.log(question.slice(-1), string.slice(1));
    console.log(question.slice(-1), string.slice(1));
    if (question.slice(-1) === string.slice(0, 1)) {
      setQuestion(string);
    } else {
      setAnswer('틀렸습니다!');
    }
  };

  return (
    <div>
      <div className='questions'>{question}</div>
      <input type='text' value={string} onChange={handleInput} />
      <button onClick={handleSubmit}>입력</button>
      <span>{answer}</span>
    </div>
  );
};

export default EndToEnd;
