import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Main from './pages/Main';
import GuGudan from './pages/GuGudan.tsx';
import EndToEnd from './pages/EndToEnd.tsx';
import NumberBaseball from './pages/NumberBaseball';
import Lotto from './pages/Lotto';
import RockPaperScissors from './pages/RockPaperScissors';
import TicTacToe from './pages/TicTacToe/TicTacToe';

import GlobalStyle from './styles/globalStyle';
import theme from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/gugudan' element={<GuGudan />} />
          <Route path='/endtoend' element={<EndToEnd />} />
          <Route path='/number-baseball' element={<NumberBaseball />} />
          <Route path='/lotto' element={<Lotto />} />
          <Route path='/rock-paper-scissors' element={<RockPaperScissors />} />
          <Route path='/tic-tac-toe' element={<TicTacToe />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
