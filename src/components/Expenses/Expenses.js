import React, { useState } from "react";

import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";

const Expenses = props => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const yearHandler = (selectedYear) => {
        setSelectedYear(selectedYear.year);
    };

    console.log(selectedYear);

    return (
        <Card className="expenses">
            <ExpensesFilter orginSelect={selectedYear} onYearPicker={yearHandler} />
            <ExpenseItem
                key={props.items[0].id}
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                key={props.items[1].id}
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                key={props.items[2].id}
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                key={props.items[3].id}
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
    )
}

export default Expenses;