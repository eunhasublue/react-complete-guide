import React from "react";
import Chart from "../Chart/Chart";

// chart를 전체적으로 반환
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // 그리고 모든 비용을 살펴본 후,
  // 달마다 해동 비용을 얻어서, 비용 금액에 따라 적절한 데이터 포인트의 값을 업데이트합니다.
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => Jan => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
