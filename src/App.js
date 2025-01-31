import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return;

    setTodos([{id: `${todo}-${Date.now()}`, todo}, ...todos]);
    setTodo('');
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo List</h1>
        <form className='todoForm' action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Add a task' value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type='submit'>Add ToDo</button>
        </form>

        <ul className="allTodos">
          {
            todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.todo}</span>
                <div>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
