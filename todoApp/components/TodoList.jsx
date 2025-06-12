import React from 'react'
import TodoItem from './TodoItem'

function TodoList({tasks, onToggle, onDelete}) {
  return (
    <>
        <div>
            {tasks.length === 0 ? (
                <p>No tasks here yet</p>
            ) : tasks.map((task) => 
                <TodoItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete} />
            )}
        </div>

    </>
  )
}

export default TodoList