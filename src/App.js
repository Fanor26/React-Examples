import { useState } from "react";
import "./App.scss";
import InputComponent from "./components/InputComponent";

import TodoListComponent from "./components/TodoListComponent";
import HeaderComponent from "./components/HeaderComponent";

const store = (listData) => {
  localStorage.setItem('listTask', JSON.stringify(listData));
}
const getStore = () => {
   return JSON.parse(localStorage.getItem('listTask'));
}
function App() {
    console.log("call App");
  let [listTask, setListTask] = useState(getStore());
  const newTaskHandler = (task) => {
    listTask = [...listTask, task];
    setListTask(listTask);
    store(listTask);
  };
  const deleteTaskHander = (id) => {
    const newlistTask = listTask.filter((items) => {
      return id !== items.id;
    });
    setListTask(newlistTask);
    store(newlistTask);
  };

  const updateTaskHandler = (id) => {
    const newListTask = listTask.map(item => {
      if (id === item.id) {
        item.state = !item.state;
      }
      return item;
    });
    setListTask(newListTask);

    store(newListTask);
  }
  return (
    <div className="App">
      <HeaderComponent />
      <InputComponent newTaskHandler={newTaskHandler} />
      <TodoListComponent list={listTask} deleteTaskHander={deleteTaskHander}  updateTaskHandler={updateTaskHandler}/>
    </div>
  );
}

export default App;
