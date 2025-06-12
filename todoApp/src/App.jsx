import React, {useState} from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (input) => {
    const newTask = {
      id: Date.now(),
      title: input,
      completed: false
    };
    setTasks([...tasks, newTask]);
    console.log(tasks)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => {
      task.id === id ? {...task, completed: !task.completed} : task;
    }))
  }

  return (
    <>
    <h1 style={{color: "#000", fontFamily: 'sans-serif'}}>Get it Done</h1>
    <TodoForm addTheTodo={addTask}/>
    <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}/>
    </>
  )
}

export default App