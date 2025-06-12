import React from 'react'
import Transaction from './Transaction'

function TransactionList({ transactions, deleteTodo, editTodo }) {
  return (
    <div>
      {transactions.map((transaction) =>
      transaction ? (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ): null
      )}
    </div>
  );
}


export default TransactionList