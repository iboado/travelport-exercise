import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import TaskContainer from "../static/components/TasksContainer";
import TasksContextProvider from "../static/context/TasksContextProvider";

afterEach(cleanup);

describe("Task element componen tests", () => {
  test("A task container component is rendered", () => {
    render(
      <TasksContextProvider>
        <TaskContainer />
      </TasksContextProvider>
    );

    expect(screen.getById("tasks-container")).toBeInTheDocument();
  });
});
