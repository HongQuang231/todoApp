import React, { useRef } from "react";

const AddTodo = ({handleAdd}) => {
  const addTitle = useRef();

  return (
    <>
      <form className="form-container">
          <input type="text" placeholder="Add to ..." className="input-text" ref={addTitle}/>
          <input type="text" placeholder="Submit" className="input-submit" onClick={() => handleAdd(addTitle.current.value)}/>
      </form>
    </>
  )
}

export default AddTodo;
