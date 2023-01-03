import './App.css';
import React from "react";
import { useContext } from 'react'

//componentes
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoAddButton } from '../ToDoAddButton/ToDoAddButton';
import { ToDoContext } from '../ToDoContext/ToDoContext'

const AppUI = () => {

  const { 
    loading, 
    error, 
    searchedToDos, 
    completeToDos, 
    deleteToDos 
  } = useContext(ToDoContext);

  return (
    <div className='app'>
      {/* INCIO DE TO DO PAGE */}

      <ToDoCounter />

      <ToDoSearch />

      <ToDoList>
        {loading && <p>Tranquilo, estamos cargando</p>}
        {error && <p>Hubo un error, es tiempo para panico</p>}
        {!(loading && !searchedToDos.length) && <p>Crea tu primer ToDo</p>}

        {searchedToDos.map(tarea => (
          <ToDoItem
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
            completeToDos={completeToDos}
            deleteToDos={deleteToDos}
          /> 
        ))}
      </ToDoList>

      <ToDoAddButton />
    </div>
  )
}

export {AppUI}