import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import GenericButton from "../static/components/GenericButton";

afterEach(cleanup);

describe("Generic Button tests", () => {
  const id = "generic-button";
  const buttonText = "Test Me!";
  const onClickFunction = jest.fn();
  const ConcreteButton = GenericButton({ id, buttonText, onClickFunction });

  test("The concrete button renders correctly", () => {
    const { getByTestId } = render(<ConcreteButton />);
    const buttonEl = getByTestId(id);

    expect(buttonEl).toBeInTheDocument();
  });

  test("The concrete button displays the text passed as props", () => {
    render(<ConcreteButton />);

    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  test("The function passed to Concrete Button is called when the element is clicked", () => {
    const { getByTestId } = render(<ConcreteButton />);
    const buttonEl = getByTestId(id);

    buttonEl.click();
    expect(onClickFunction).toHaveBeenCalled();
  });
});
