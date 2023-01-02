import { useState } from 'react';
import React from "react";
import { AppUI } from './AppUI'


const defaulToDos = [];

for (let i = 0; i < 20 ; i++) {
  defaulToDos.push({text: `tarea N${i}`, completed: false});
}

const App = () => {

  const [searchValue, setSearchValue] = useState('');

  const [toDos, setToDos] = useState(defaulToDos);
  
  const completedToDos = toDos.filter(tarea => !!tarea.completed).length;
  
  const totalToDos = toDos.length;
  
  const completeToDos = (text) => {
    const toDoIndex = toDos.findIndex(tarea => tarea.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = !toDos[toDoIndex].completed;
    setToDos(newToDos);
  }

  const deleteToDos = (text) => {
    const toDoIndex = toDos.findIndex(tarea => tarea.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos);
  }
    
    let searchedToDos = [];
  
    if (!(searchValue.length >= 1)) {
      searchedToDos = toDos;
    }else{
      searchedToDos = toDos.filter(tarea => {
        const toDoText = tarea.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return toDoText.includes(searchText);
      })
    }
  
  return (
    <AppUI 
      total={totalToDos}
      completed={completedToDos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      completeToDos={completeToDos}
      deleteToDos={deleteToDos}
      searchedToDos={searchedToDos}
    />
  )
}

export default App;
