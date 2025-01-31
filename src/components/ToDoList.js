import React from 'react'

function ToDoList({todos, handleEdit, handleDelete}) {
  return (
    <ul className="allTodos">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.todo}</span>
          <div>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList
