import {useState} from 'react';
import "./App.scss";
import InputComponent from "./components/InputComponent"

import TodoListComponent from "./components/TodoListComponent";
import HeaderComponent from "./components/HeaderComponent";


function App() {
    let [listTask, setListTask]= useState([]);
    const handlerNewTask = (task) =>{
        listTask = [...listTask, task]
        setListTask(listTask);

    }

  return (
    <div className="App">
        <HeaderComponent />
    <InputComponent handlerNewTask={handlerNewTask}/>
        <TodoListComponent list={listTask}/>
    </div>
  );
}

export default App;
