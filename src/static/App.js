import React from "react";
import { render } from "react-dom";
import AddTaskForm from "./components/AddTaskForm";
import TasksContainer from "./components/TasksContainer";
import { TasksContextProvider } from "./context/TasksContextProvider";

const App = () => {
  return (
    <div>
      <TasksContextProvider>
        <AddTaskForm />
        <TasksContainer />
      </TasksContextProvider>
    </div>
  );
};

render(<App />, document.getElementById("root"));
