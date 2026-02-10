import { useState, useEffect } from "react";

function TodoInput({ setTodos }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 등록 버튼 클릭 시 실행되는 함수
  const handleAddClick = () => {
    // 1. 새로운 변수 생성 및 기존 배열 복사
    const newArr = [...todoList];

    // 2. 새로운 객체 추가
    newArr.push({
      id: todoList.length,
      todo: inputValue,
      isComplete: false,
    });

    // 3. 내부 상태 업데이트
    setTodoList(newArr);

    // 4. 부모(App)의 상태도 업데이트 (화면 갱신용)
    setTodos(newArr);

    // 5. 입력창 비우기
    setInputValue("");
  }; // <--- handleAddClick 함수가 여기서 끝남

  // useEffect: todoList가 변할 때마다 실행
  useEffect(() => {
    console.log("현재 todoList상태:", todoList);
  }, [todoList]);

  // TodoInput 함수 전체의 return문
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
} // <--- TodoInput 컴포넌트 함수가 여기서 최종적으로 끝남

export default TodoInput;
