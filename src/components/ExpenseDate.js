import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      {/* 
      1. toLocaleString() 사람이 읽을 수 있도록 날짜를 출력해줌
          - 첫번재 인수 : 언어
          - 두번재 인수 : 날짜가 어떻게 포맷될지 설정하는 장소 객체
      2. 날짜 객체는 문자로 출력될 수 없다. 
         toISOString() 써야된다.
    */}
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
