import { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={() => setTitle('te')}>change item </button>
    </div>
  )
}
