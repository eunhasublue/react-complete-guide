// 사용자가 없다면 새 에러를 발생시키는 파일
/*
  이 에러를 콜스택 위로 올라가게 합니다.
  모든 컴포넌트에 걸쳐 에러를 전달하면서 어느 곳에서도 이를 처리하지 못하면 애플리케이션이 멈추게 됩니다.
*/
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
