import { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput.jsx";

// 투두리스트 데이터 관리
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoInput setTodos={setTodos} /> {/* setTodos를 TodoInput에 넘김 */}
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
