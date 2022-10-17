import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoPage } from "./page/TodoPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
