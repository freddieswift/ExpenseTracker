import { React, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const [expanded, setExpanded] = useState(false)

    const expandHandler = (event) => {
        setExpanded((prevState) => {
            if (prevState === false) {
                return true
            }
            return false
        })
    }

    return (
        <div className="new-expense">
            {!expanded && <button onClick={expandHandler}>Add New Expense</button>}
            {expanded && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelHandler={expandHandler} />}
        </div>
    )




}

export default NewExpense