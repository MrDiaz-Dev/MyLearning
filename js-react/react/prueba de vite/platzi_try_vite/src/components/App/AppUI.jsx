import './App.css';
import React from "react";

//componentes
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoAddButton } from '../ToDoAddButton/ToDoAddButton';

const AppUI = (props) => {
  return (
    <div className='app'>
      {/* INCIO DE TO DO PAGE */}

      <ToDoCounter 
        total={props.totalToDos}
        completed={props.completedToDos}
      />

      <ToDoSearch 
        searchValue={props.searchValue} 
        setSearchValue={props.setSearchValue}
      />

      <ToDoList>
        {props.searchedToDos.map(tarea => (
          <ToDoItem
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
            completeToDos={props.completeToDos}
            deleteToDos={props.deleteToDos}
          /> 
        ))}
      </ToDoList>

      <ToDoAddButton />
    </div>
  )
}

export {AppUI}