import { useState } from "react";
import './ToDoSearch.css';

const ToDoSearch = ({searchValue, setSearchValue }) => {

  const onSearchToDos = (event) =>   {

    const value = event.target.value;
    setSearchValue(value);

  }

  return (
    <input 
    className="ToDoSearch" placeholder='Buscardor de Tareas' 
    value={searchValue}
    onChange={() => {
      onSearchToDos(event);
    }}
    />
  )
}

export {ToDoSearch};