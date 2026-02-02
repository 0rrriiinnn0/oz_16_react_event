import { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput.jsx";

// 투두리스트 데이터 관리
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoInput /> {/* 1단계: 컴포넌트 불러오기 */}
      <ul>
        <li>할 일 1</li>
      </ul>
    </div>
  );
}
export default App;
