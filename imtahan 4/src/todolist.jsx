import { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;