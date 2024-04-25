import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputText, setText] = useState("");
  const [toDoList, setToDoList] = useState(["Shop", "Gym", "Rest"]);

  function handleSubmit(event) {
    event.preventDefault();
    setToDoList([...toDoList, inputText]);
  }

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Enter new task</label>
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          value={inputText}
          onChange={(event) => setText(event.target.value)}
        />
        <button>Add Task</button>
      </form>
      <ul>
        {toDoList.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </>
  );
}
export default App;
