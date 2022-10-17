import { useState, useEffect, useRef } from 'react';
import { Button, ImgWapper, Img } from './styles';

import repPath from 'styles/img/rsp.png';

const rspPosition = {
  rock: '-150px',
  scissors: '0',
  paper: '-330px',
};

const scores = {
  scissors: 1,
  rock: 0,
  paper: -1,
};

const computerChoice = (rspX) => {
  return Object.entries(rspPosition).find(function (v) {
    return v[1] === rspX;
  })[0];
};

export const RockPaperScissors = () => {
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [rspX, setRspX] = useState(rspPosition.rock);
  const interval = useRef();

  useEffect(() => {
    // console.log('실행');
    interval.current = setInterval(changeHand, 2000);
    return () => {
      // console.log('종료');
      clearInterval(interval.current);
    };
  }, [rspX]);

  const changeHand = () => {
    if (rspX === rspPosition.rock) {
      setRspX(rspPosition.scissors);
    } else if (rspX === rspPosition.scissors) {
      setRspX(rspPosition.paper);
    } else if (rspX === rspPosition.paper) {
      setRspX(rspPosition.rock);
    }
  };

  const onClickBtn = (choice) => () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(rspX)];
      const diff = myScore - cpuScore;
      console.log('myScore', myScore);
      console.log('cpuScore', cpuScore);

      if (diff === 0) {
        setResult('비겼습니다!');
      } else if ([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult('졌습니다!');
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        interval.current = setInterval(changeHand, 100);
      }, 1000);
    }
  };

  return (
    <>
      <ImgWapper id='computer'>
        <Img
          src={repPath}
          className='rspX'
          // style={{ marginLeft: `${rspX}` }}
          rspX={rspX}
          alt='가위바위보'
        />
      </ImgWapper>
      <div>
        <Button id='scissors' onClick={onClickBtn('scissors')}>
          가위
        </Button>
        <Button id='rock' onClick={onClickBtn('rock')}>
          바위
        </Button>
        <Button id='paper' onClick={onClickBtn('paper')}>
          보
        </Button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RockPaperScissors;
