import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formVisib, setFormVisib] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showForm = (event) => {
    event.preventDefault();
    return formVisib ? setFormVisib(false) : setFormVisib(true);
  };

  if (formVisib === false) {
    return (
      <div className="new-expense">
        <button onClick={showForm}>Add New Expense</button>{" "}
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onVisibChange={showForm}
      />
    </div>
  );
};

export default NewExpense;
