// 1단계 : TodoInput 컴포넌트 만들기 - input 받고, 저장하기
/* 
1. TodoInput.jsx 파일 생성 
=> 기능을 컴포넌트 단위로 관리하기

2. state로 inputValue 선언하기 
=> 입력창에 타이핑하는 글자들을 저장할 임시 메모리 공간 만들기
- inputValue: 입력창의 값을 다룰 때 가장 많이 쓰임

3. input 태그의 value 값이 변화할 때마다 -> setInputValue()를 통해 inputValue 업데이트 하기(onChange 이벤트 활용)
=> 사용자가 글자 칠 때마다 메모리 공간을 실시간으로 갱신하기(이 과정이 없으면 글자 쳐도 화면에 안 나타남)

4. useEffect로 inputValue가 없데이트될 때마다 inputValue가 출력 되도록 설정하기
=> 상태가 변할 때마다 특정 동작(콘솔 출력)을 실행하는 Hooks의 동작 원리
*/

import { useState, useEffect } from "react";

function TodoInput() {
  // state 선언: [현재값, 변환함수] = useState(초기값)
  const [inputValue, setInputValue] = useState("");

  // onChange 함수: input에 타이핑할 때마다 실행됨
  const handleInputChange = (event) => {
    //  event.target.value: 사용자가 키보드로 입력한 '현재 글자들'
    setInputValue(event.target.value);
  };

  // useEffect: 특정 값이 바뀔 때마다 실행되는 '감시자'
  useEffect(() => {
    console.log("현재 입력값:", inputValue);
  }, [inputValue]); // 의존성 배열: 여기에 넣은 값이 변할 때만 실행됨

  return (
    <div className="todo-input">
      <input
        type="text"
        // 사용자에게 업데이트된 값을 보여주려면? state인 inputValue를 연결
        value={inputValue}
        onChange={handleInputChange}
        placeholder="할 일을 입력하세요"
      />
      <button>추가</button>
    </div>
  );
}

export default TodoInput;
