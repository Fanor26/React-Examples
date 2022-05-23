import React from 'react';
import TaskComponent from "./TaskComponent";

const TodoListComponent = ({list}) => {
    list.map(item => {
        console.log("item -> :", item)

        }

    )
    return (
        <ul className="listContainer">
            {list.map(item =><TaskComponent tasks={item}/>)}

        </ul>
    );
};

export default TodoListComponent;
