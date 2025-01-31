import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    if (editId === 0) {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    } else {
      const editTodo = todos.find((todo) => todo.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id ? { id: t.id, todo: todo } : t
      );
      console.log(updatedTodos)
      setTodos(updatedTodos);
      setEditId(0);
    }
    setTodo("");
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List</h1>
        <form className="todoForm" action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">
            {editId === 0 ? "Add ToDo" : "Update Todo"}
          </button>
        </form>

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
      </div>
    </div>
  );
}

export default App;
