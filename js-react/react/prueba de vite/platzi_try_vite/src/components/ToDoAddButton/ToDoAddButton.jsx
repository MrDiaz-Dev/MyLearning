import React from "react";
import './ToDoAddButton.css';

const ToDoAddButton = () => {

  const onClickAddButton = (msg) => {
    alert(msg);
  }

  return (
    <button 
    className="ToDoAddButton"
    onClick={() => {
      onClickAddButton('Aqui debemos colocar un modal');
    }}
    >
      +
    </button>
  )
}

export {ToDoAddButton};