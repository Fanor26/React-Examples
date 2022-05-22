import "./App.scss";
import InputComponent from "./components/InputComponent"
import TaskComponent from "./components/TaskComponent"
import TodoListComponent from "./components/TodoListComponent";


function App() {
  return (
    <div className="App">
    <InputComponent />
        <TaskComponent />
        <TodoListComponent />
    </div>
  );
}

export default App;
