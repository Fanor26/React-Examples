import TaskComponent from "./TaskComponent";

const TodoListComponent = ({ list, deleteTaskHander }) => {
  return (
    <div className="listContainer">
      {list.map((item) => (
        <TaskComponent
          key={item.id}
          tasks={item}
          deleteTaskHander={deleteTaskHander}
        />
      ))}
    </div>
  );
};
export default TodoListComponent;
