import React, { useContext } from "react";
import TasksContext from "../context/TasksContextProvider";
import TaskElement from "./TaskElement";

const TasksContainer = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <div id="tasks-container">
      {tasks.map(singleTask => {
        return (
          <TaskElement
            key={singleTask.id}
            description={singleTask.description}
            id={singleTask.id}
          />
        );
      })}
    </div>
  );
};

export default TasksContainer;
