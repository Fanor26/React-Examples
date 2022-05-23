import React from "react";

const TaskComponent = ({tasks}) => {
  return (
    <div className="task">
        <div>
            <p>{tasks} </p>
        </div>

      <div>
        <button className="button">Delete Task</button>
      </div>
    </div>
  );
};

export default TaskComponent;
