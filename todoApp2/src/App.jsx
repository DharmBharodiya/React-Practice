  import React, {useState} from 'react'
import { useEffect } from 'react'

  function App() {
    // const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    const [tasks, setTasks] = useState(() => {
      const saved = localStorage.getItem("tasks")
      return saved ? JSON.parse(saved) : []
    })
    
    const addTodo = (input) => {
      const newTodo = {
        id: Date.now(),
        title: input,
        completed: false
      }

      setTasks([...tasks, newTodo])
      setInput("")
    }

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    useEffect(() => {
      const theItems = JSON.parse(localStorage.getItem("tasks"))
      if(theItems){
        setTasks(theItems)
      }
    }, [])

    const handleSubmit = (e) => {
      e.preventDefault();
      if(input.trim() === "") return;
      
      addTodo(input);
      setInput("");
    }

    const toggleTask = (id) => {
      setTasks(
        tasks.map(task =>
          task.id === id ? {...task, completed: !task.completed} : task
        )
      )
    }

    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id))
    }

    return (
      <>
        <h1>The Todo App</h1>

        <form onSubmit={handleSubmit}>
          <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter ur todo'
          />
          <button>
            add todo
          </button>
        </form>

        <div>
          <ul>
            {/* {tasks.map((task) => (
              <li key={task.id} onClick={() => toggleTask(task.id)}>
                {task.title}
                <button onClick={(e) => {
                  e.stopPropagation()
                  deleteTask(task.id)
                }}>r</button>
              </li>
            ))} */}

            {tasks.map((task) => (
              <li key={task.id}>
              <span onClick={() => toggleTask(task.id)}>{task.title}</span>
              <button onClick={() => deleteTask(task.id)}>r</button>
            </li>
            ))}

            
          </ul>
        </div>
      </>
    )
  }

  export default App