import React, {useState} from 'react'

function TodoForm({addTheTodo}) {
    let [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        if(input.trim() === '') return;

        addTheTodo(input);
        setInput("");
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            id='todoInput'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='dump your task here'
            />
            <button type='submit'>add todo</button>
        </form>
    </>
  )
}

export default TodoForm