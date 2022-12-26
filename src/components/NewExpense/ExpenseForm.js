import { useState } from 'react'
import './ExpenseForm.css'
export default function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    })
  }
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value }
    })
  }
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value }
    })
  }
  const clearAll = () => {
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    })
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = userInput
    console.log(expenseData)
    clearAll()
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="200-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button">Add expense</button>
      </div>
    </form>
  )
}
