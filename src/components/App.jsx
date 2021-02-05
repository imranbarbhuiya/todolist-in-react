import React, { useState } from "react";

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

  function inputItem(item) {
    return <li>{item} </li>;
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
        <ul>{items.map(inputItem)}</ul>
      </div>
    </div>
  );
}

export default App;
