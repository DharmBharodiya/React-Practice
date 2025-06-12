import React from 'react'
import { useState } from 'react'
import {TodoProvider} from "./context"
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      todo: todo,
      completed: false
    }

    setTodos((prev) => [...prev, newTodo])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => 
      (prevTodo.id === id ? todo : prevTodo)
    ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => todos.filter((prevTodo) => (prevTodo.id !== id)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => todos.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: false)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    
    if(todos && todos.length  > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      
    </TodoProvider>
  )
}

export default App