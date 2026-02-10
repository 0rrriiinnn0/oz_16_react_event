import { useState } from "react";

function TodoInput({ setTodos }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length,
        todo: inputValue,
        isComplete: false,
      },
    ]);

    setInputValue("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAddClick}>등록</button>
    </div>
  );
}

export default TodoInput;
