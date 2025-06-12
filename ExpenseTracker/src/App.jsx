import React, {useState} from 'react'
import AddTransaction from './components/AddTransaction'
import Transaction from './components/Transaction';
import TransactionList from './components/TransactionList';
import { useEffect } from 'react';
import IncomeExpenseChart from './components/IncomeExpenseChart';
import "./App.css"

function App() {

  

  const [transactions, setTransactions] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"))
    return Array.isArray(saved) ? saved.filter(Boolean) : [];
    // here the saved.filter(Boolean) method is used to remove all the null or undefined values from the array
  })


  console.log(transactions)

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions])

  const deleteTodo = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  }

  const editTodo = (id, newText, newAmount) => {
    const updated = transactions.map((transaction) => 
      transaction.id == id
      ? {...transaction, text: newText, amount: newAmount} 
      : transaction
  )
  console.log("updated", updated)
    setTransactions(updated)
  }

  return (
    <>
    <div id='appContainer'>
    <h1>Expense Tracker</h1>
      <div id='innerAppContainer'>
          <div>
            <h2>Total Balance: ₹{transactions.reduce((total, transaction) => total + transaction.amount, 0)}</h2>
            <h2>Income: ₹{transactions.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => acc + Number(transaction.amount), 0)}</h2>
            <h2>Expense: ₹{transactions.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => acc + Number(transaction.amount), 0)}</h2>
          </div>
          <AddTransaction addTrans={(newTrans) => setTransactions([newTrans, ...transactions])} />
          {/* <Transaction transaction={{text: "Dharm", amount: 59}}/> */}
          <TransactionList transactions={transactions} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
        <IncomeExpenseChart transactions={transactions} />
      </div>
    </>
  )
}

export default App