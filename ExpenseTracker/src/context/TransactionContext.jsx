import React, { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"));
    return Array.isArray(saved) ? saved.filter(Boolean) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const deleteTodo = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const editTodo = (id, newText, newAmount) => {
    const updated = transactions.map((transaction) =>
      transaction && transaction.id === id
        ? { ...transaction, text: newText, amount: Number(newAmount) }
        : transaction
    );
    setTransactions(updated);
  };

  const addTrans = (newTrans) => setTransactions([newTrans, ...transactions]);

  return (
    <TransactionContext.Provider value={{ transactions, deleteTodo, editTodo, addTrans }}>
      {children}
    </TransactionContext.Provider>
  );
};