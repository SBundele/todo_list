import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
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
        <ToDoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId={editId} />
        <ToDoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
