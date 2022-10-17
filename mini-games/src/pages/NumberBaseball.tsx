import { useState, useRef, useCallback } from 'react';

const getRandomNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];
  for (let i = 0; i < 4; i++) {
    const randomNum = Math.floor(Math.random() * numbers.length);

    result.push(numbers[randomNum]);
    numbers.splice(randomNum, 1);
  }
  return result.join('');
};

const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getRandomNumbers());
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]);
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(() => {
    const answerArray:number[] = value.split('').map((v) => parseInt(v));
    let strike = 0;
    let ball = 0;

    const checkInput = (input:String) => {
      if (input.length !== 4) {
        return alert('4자리 숫자를 입력해 주세요.');
      }
      if (new Set(input).size !== 4) {
        return alert('중복되지 않게 입력해 주세요.');
      }
      for (let i = 0; i < tries.length; i++) {
        if (tries[i].try.includes(input)) {
          return alert('이미 시도한 값입니다.');
        }
      }
      return input;
    };

    if (value === answer && checkInput(value)) {
      setTries((t) => [
        ...t,
        {
          try: value,
          result: '홈런!',
        },
      ]);
      setResult('홈런!');
      alert('게임을 다시 실행합니다.');
      setValue('');
      setAnswer(getRandomNumbers());
      setTries([]);
    }

    if (tries.length >= 2) {
      setResult(`10번 넘게 틀려서 실패! 답은 ${answer}였습니다!`);
      alert('게임을 다시 시작합니다.');
      setValue('');
      setAnswer(getRandomNumbers());
      setTries([]);
      inputEl.current.focus();
    } else {
      for (let i = 0; i < 4; i++) {
        if (answerArray[i] === Number(answer[i])) {
          strike++;
        } else if (answer.includes(String(answerArray[i]))) {
          ball++;
        }
      }
      if (checkInput(value)) {
        setTries((t) => [
          ...t,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼 입니다.`,
          },
        ]);
      }
    }
  }, [value, answer, tries]);

  const onChangeInput = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <div className='questions'>숫자 4개를 맞춰보세요!</div>
      <div>{result}</div>
      <input ref={inputEl} type='text' value={value} onChange={onChangeInput} />
      <button onClick={handleSubmit}>입력</button>
      {tries.length > 0 && (
        <ul>
          {tries.map((trie, idx) => {
            return (
              <li key={idx}>
                <p>
                  {idx + 1}번째 입력값 : {trie.try}
                </p>
                <p>{trie.result}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NumberBaseball;
