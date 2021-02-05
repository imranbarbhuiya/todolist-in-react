import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function add() {
    setItems((prevValue) => [...prevValue, input]);
    setInput("");
  }
  function handleChange(ev) {
    setInput(ev.target.value);
  }

  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input autoFocus type="text" onChange={handleChange} value={input} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
