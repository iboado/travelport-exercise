import React from "react";
import { render, cleanup, screen, getByRole } from "@testing-library/react";
import TaskElement from "../static/components/TaskElement";

afterEach(cleanup);

describe("Task element componen tests", () => {
  test("A task element component is rendered", () => {
    render(<TaskElement description={"Walk the dog"} id={0} />);

    expect(screen.getByText("Walk the dog")).toBeInTheDocument();
  });

  test("Clicking the delete button unmounts the component", () => {
    render(<TaskElement description={"Do the dishes"} id={0} />);

    const removeTaskButton = screen.getByRole("button");
    removeTaskButton.click();

    expect(screen.getByText("Do the dishes")).not.toBeInTheDocument();
  });
});
