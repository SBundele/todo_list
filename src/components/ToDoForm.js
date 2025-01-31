import React from 'react'

function ToDoForm({handleSubmit, todo, setTodo, editId}) {

 

  return (
    <form className="todoForm" action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{editId === 0 ? "Add ToDo" : "Update Todo"}</button>
    </form>
  );
}

export default ToDoForm
