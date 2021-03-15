import React from "react";
import { render, cleanup, screen, getByRole } from "@testing-library/react";
import AddTaskForm from "../static/components/AddTaskForm";
import TaskContainer from "../static/components/TasksContainer";
import TasksContextProvider from "../static/context/TasksContextProvider";

afterEach(cleanup);

function renderWithTaskContext(CustomComponent) {
  return render(
    <TasksContextProvider>
      <CustomComponent />
      <TaskContainer />
    </TasksContextProvider>
  );
}

describe("Add task form tests", () => {
  test("The Add Task Form renders correctly", () => {
    const { getByTestId } = render(<AddTaskForm />);
    const addTaskComp = getByTestId("add-task-form");

    expect(addTaskComp).toBeInTheDocument();
  });

  //Doesn't work =(
  // test("The add task buttons triggers the creation and rendering of a task component to the dom", () => {
  //   const { getByRole } = renderWithTaskContext(AddTaskForm);
  //   const addTaskButton = getByRole("button");

  //   addTaskButton.click();
  //   expect(screen.getById("task-el-0")).toBeInTheDocument();
  // });
});
