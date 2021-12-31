import "./Card.css";

// 껍데기 컴포넌트
// border-radius & box-shadow는 중복되는 css이기 때문에
// ExpenseItem 컴포넌트에서 감싸고 있는 div를 Card 컴포넌트로 대체하기 위해 만들어준다.
function Card(props) {
  // children은 props 자체에서 빌트인 되어 있음
  // Card만 쓰면 자식 컴포넌트를 감쌀 수 없어서 빌트인되어 있고 children 지정되어있는 이름을 쓴다.
  // 이 특별한 children props의 value는 항상 콘텐츠가 될 것임
  // 컴포넌트 태그에는 클래스가 적용되지 않아서 Card 컴포너트로 와서 props로 ExpenseItem의 classNmae을 속성으로 받는다.
  // 그것을 상수 classes로 넣어줘 적용시킨다.
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
