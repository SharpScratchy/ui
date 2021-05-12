import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./button";

test("Button should be rendered with correct label", () => {
  const { getByRole } = render(<Button label="Click me!" onClick={() => {}} />);
  expect(getByRole("button")).toHaveTextContent("Click me!");
});

test("Button should have a default css class", () => {
  const { getByRole } = render(<Button label="Click me!" onClick={() => {}} />);
  expect(getByRole("button")).toHaveAttribute("class", "button");
});

test("Button can receive customization", () => {
  const { getByRole } = render(<Button label="Click me!" classNameSuffix="primary" onClick={() => {}} />);
  expect(getByRole("button")).toHaveAttribute("class", "button button--primary");
});

test("Button should call onClick callback when clicked", () => {
  let clickChecker = 0;

  const { getByRole } = render(
    <Button label="Click me!" onClick={() => clickChecker++} />
  );

  expect(clickChecker).toBe(0);

  fireEvent.click(getByRole("button"));

  expect(clickChecker).toBe(1);
});
