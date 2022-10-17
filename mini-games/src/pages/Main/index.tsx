import { Link } from 'react-router-dom';

import { Wrapper, Container, List } from './styles';

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <List>
          <Link to='/gugudan'>1.구구단</Link>
        </List>
        <List>
          <Link to='/endtoend'>2.끝말잇기</Link>
        </List>
        <List>
          <Link to='/number-baseball'>3.숫자야구</Link>
        </List>
        <List>
          <Link to='/lotto'>4.로또</Link>
        </List>
        <List>
          <Link to='/rock-paper-scissors'>5.가위바위보</Link>
        </List>
        <List>
          <Link to='/tic-tac-toe'>6.틱택토</Link>
        </List>
      </Container>
    </Wrapper>
  );
};

export default Main;
