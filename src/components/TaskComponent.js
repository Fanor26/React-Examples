import React from "react";

const TaskComponent = ({ tasks, deleteTaskHander,  updateTaskHandler }) => {
  const { id, taskName, date, state } = tasks;
  return (
    <div className="task">
      <div>
      <p className={ state?'textThrough': ''} onDoubleClick={() => {
        updateTaskHandler(id);
    }}>{taskName} </p>
      </div>

      <div>
        <button
          className="button"
          onClick={() => {
            deleteTaskHander(id);
          }}
        >
          delete task
        </button>
      </div>
    </div>
  );
};

export default TaskComponent;
