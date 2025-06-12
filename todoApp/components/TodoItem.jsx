import React from 'react'

function TodoItem({task, onToggle, onDelete}) {
  return (
    <>
        <div>
            <span
            onClick={() => onToggle(task.id)}>
                {task.title}
            </span>
            <button
            onClick={() => onDelete(task.id)}>
                r
            </button>
        </div>
    </>
  )
}

export default TodoItem;