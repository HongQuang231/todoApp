import React, { useState } from "react";

const TodoItem = ({ id, title, completed, handleDelete }) => {
  const [toggle, setToggle] = useState(completed);

  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <ul>
        <li className="todo-item">
          <input
            type="checkbox"
            checked={toggle}
            onChange={() => handleToggle()}
          />
          <span className={toggle ? "completed" : " "}>{title}</span>
          <button className="btn-style" onClick={() => handleDelete(id)}>X</button>
        </li>
      </ul>
    </>
  );
};

export default TodoItem;
