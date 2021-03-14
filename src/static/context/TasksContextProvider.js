import React, { createContext, useState } from "react";

const TasksContext = createContext([]);

export function TasksContextProvider({ children }) {
  const [tasks, updateTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ tasks, updateTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
export default TasksContext;
