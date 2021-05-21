import React, { useState } from "react";

import ExpensesList from "../Expenses/ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const yearHandler = (selectedYear) => {
    setSelectedYear(selectedYear.year);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  
  return (
    <Card className="expenses">
      <ExpensesFilter orginSelect={selectedYear} onYearPicker={yearHandler} />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;