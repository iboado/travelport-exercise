import React, { useContext } from "react";
import GenericButton from "./GenericButton";
import TasksContext from "../context/TasksContextProvider";

const TaskElement = ({ description, id }) => {
  const { tasks, updateTasks } = useContext(TasksContext);
  const deleteTask = () => {
    const newTaskList = tasks.filter(singleTask => singleTask.id !== id);
    updateTasks(newTaskList);
  };
  const DeleteTaskButton = GenericButton({
    buttonText: "-",
    onClickFunction: deleteTask
  });
  return (
    <div id={id}>
      {description}
      <DeleteTaskButton />
    </div>
  );
};

export default TaskElement;
