import React from 'react'
import { useState } from 'react'
import "../styles/transactionForm.css"

function AddTransaction({addTrans, toggleChart}) {
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrans = {
        id: Date.now(),
        text: description,
        amount: +amount,
        type: type,
    }
    addTrans(newTrans);
    setAmount("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <input
        type='number'
        value={amount}
        placeholder='enter the amount (include - for expense)'
        onChange={(e) => setAmount(e.target.value)}
        />
        {/* <button onClick={() => setType("expense")} type='button'>Expense</button>
        <button onClick={() => setType("income")} type='button'>Income</button> */}
        <button type='submit'>
            Add Transaction
        </button>
        <button type='button' onClick={toggleChart}>
            Visualize
        </button>
    </form>
  )
}

export default AddTransaction