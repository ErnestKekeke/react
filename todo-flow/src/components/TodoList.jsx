import { useRef, useState } from "react";
import "../css/TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userInput = inputRef.current.value.trim();
    if (!userInput) return;
    setTodos((t) => [...t, userInput]);
    inputRef.current.value = "";
  };

  function removeTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function moveTodoUp(index) {
    setTodos((prev) => {
      if (index <= 0) return prev;
      const updated = [...prev];
      [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
      return updated;
    });
  }

  function moveTodoDown(index) {
    setTodos((prev) => {
      if (index >= prev.length - 1) return prev;
      const updated = [...prev];
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
      return updated;
    });
  }

  return (
    <div className="todo-root">
      <div className="todo-card">
        <h1 className="todo-title">My Todos</h1>
        <p className="todo-subtitle">
          <span className="todo-count">{todos.length}</span> task{todos.length !== 1 ? "s" : ""} remaining
        </p>

        <ul className="todo-list">
          {todos.length === 0 && <div className="todo-empty">// no tasks yet</div>}
          {todos.map((todo, index) => (
            <li key={index}>
              <span className="todo-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="todo-text">{todo}</span>
              <div className="todo-btn-group">
                <button className="btn-base btn-up"   onClick={() => moveTodoUp(index)}>↑</button>
                <button className="btn-base btn-down" onClick={() => moveTodoDown(index)}>↓</button>
                <button className="btn-base btn-del"  onClick={() => removeTodo(index)}>✕</button>
              </div>
            </li>
          ))}
        </ul>

        <form className="todo-form" onSubmit={handleOnSubmit}>
          <input
            ref={inputRef}
            type="text"
            id="user-input"
            className="todo-input"
            placeholder="// add new task..."
          />
          <button type="submit" className="btn-add">ADD</button>
        </form>
      </div>
    </div>
  );
}

export default TodoList;