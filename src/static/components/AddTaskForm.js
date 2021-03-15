import React, { useState, useContext } from "react";
import TasksContext from "../context/TasksContextProvider";
import GenericButton from "./GenericButton";

const AddTaskForm = () => {
  const [uniqueId, setUniqueId] = useState(1);
  const { tasks, updateTasks } = useContext(TasksContext);
  const [description, setDescription] = useState("");

  const addNewTask = () => {
    setUniqueId(uniqueId + 1);
    const uniqueIdTag = `task-el-${uniqueId}`;
    const newTaskModel = { id: uniqueIdTag, description };

    updateTasks([...tasks, newTaskModel]);
  };
  const AddTaskButton = GenericButton({
    buttonText: "+",
    onClickFunction: addNewTask
  });

  return (
    <div>
      <label htmlFor="inputText">
        <input
          placeholder="Add a new task!"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></input>
      </label>
      <AddTaskButton />
    </div>
  );
};

export default AddTaskForm;
