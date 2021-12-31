// react 라이브러리에서 정해진 함수를 세부적으로 {} 중괄호를 이용하여 가져옴
// useState
// 1. 다시금 호출될 때, 변화값을 반영한다.
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// 비용 아이템 데이터를 만드는 컴포넌트
function ExpenseItem(props) {
  /*
    1. 처음 useState() 호출
    2. 초기값 설정 () 괄호 안에 인수를 입력한다.
    3. 해당 변수에 새로운 값을 지정할 수 있게 함수를 부 여한다.
    4. 첫번째 인덱스를 변수 자체인 배열을 반환한다.
    5. 두번째 인덱스는 업데이트 함수를 반환한다.
    6. useState() 다시 호출될 때, 즉, 값이 변경될 때, 컴포넌트 함수 전체가 다시 호출됨. 
  */
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("update");
  };

  // html code and jsx code가 return 됨
  return (
    // Card에게 있어서 ExpenseDate는 자식 컴포넌트
    <Card className="expense-item">
      {/* 
          열린 태그 닫는 태그 사이에 내용이 없으면 아래 처럼 작성해야한다. 
          스스로 닫아줘야 한다.
      */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* onClick 이벤트리스너의 함수의 경우 {} 중괄호 안에 함수가 들어간다. */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
