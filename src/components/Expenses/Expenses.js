import ExpenseItem from './ExpenseItem'
import './Expenses.css'
export default function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            price={item.amount}
            date={item.date}
          />
        )
      })}
    </div>
  )
}
