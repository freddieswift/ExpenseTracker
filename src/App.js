import { React, useState } from 'react'
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 12, 16) },
  { title: 'Gas Bill', amount: 40.65, date: new Date(2021, 12, 16) },
  { title: 'New TV', amount: 149.99, date: new Date(2021, 12, 16) },
  { title: 'New Phone', amount: 600.87, date: new Date(2021, 12, 16) }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
