import { React, useState } from 'react';
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (newDate) => {
        setFilteredYear(newDate)
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
                {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
            </Card>
        </div>
    )
}

export default Expenses;