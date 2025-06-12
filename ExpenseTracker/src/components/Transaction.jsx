import { useState } from "react"
import React from 'react'
import '../styles/transactionstyle.css'

function Transaction({transaction, deleteTodo, editTodo}) {
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState(transaction.text);
  const [editAmount, setEditAmount] = useState(transaction.amount);

  const handleSave = () => {
    console.log("Saving", transaction.id, editText, editAmount)
    editTodo(transaction.id, editText, Number(editAmount))
    setEdit(false)
  }

  if(Number(transaction.amount) < 0){
    transaction.type = "expense"
  }else if(Number(transaction.amount) > 0){
    transaction.type = "income"
  }

  return (
    <>
        
        <div id="mainContainer">
           {/* <div style={{background: transaction.type === "expense" ? "#E65F5C" : "#9EE493"
        }} id="theTransactionElement">  */}
            <div id="theTransactionElement" style={{color: transaction.type === "expense" ? "#ff595e" : "#8ac926"}}>
            
            {edit ? (
              <div id="editContainer">
                <div id="inputContainer">
                    <input 
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <input
                      type="number"
                      value={editAmount}
                      onChange={(e) => setEditAmount(e.target.value)}
                    />
                </div>
                <div id="editBtn">
                  <button onClick={handleSave}>💾</button>
                  <button onClick={() => setEdit(false)}>❌</button>
                </div>
              </div>
            ):(
              <div id="container">
                <div id="basic-info">
                  <h2 style={{margin: 0}}>{transaction.text}</h2>
                  <p style={{margin: 0}}>{`₹${transaction.amount}`}</p>
                </div>
                <div id="btnDiv">
                  <button onClick={() => setEdit(true)}  style={{background: "#A4D4B4"}}>✏️</button>
                  <button onClick={() => deleteTodo(transaction.id)} style={{background: "#CA054D"}}>🗑️</button>
                </div>
              </div>
            )}
            
          </div>
        </div>
    </>
  )
}

export default Transaction