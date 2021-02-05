import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    setIsDone((prevValue) => !prevValue);
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.item}
      </li>
      <p
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <span>❌</span>
      </p>
    </div>
  );
}

export default ToDoItem;
