import React, {useState} from 'react'
import { useTodo } from '../context'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return
        addTodo({})
    }

  return (
    <form>
        <input
        type="text" 
        placeholder='enter todo'
        />
        <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm