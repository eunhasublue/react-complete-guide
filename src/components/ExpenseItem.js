import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// 비용 아이템 데이터를 만드는 컴포넌트
function ExpenseItem(props) {
  // html code and jsx code가 return 됨
  return (
    <div className="expense-item">
      {/* 
          열린 태그 닫는 태그 사이에 내용이 없으면 아래 처럼 작성해야한다. 
          스스로 닫아줘야 한다.
      */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
