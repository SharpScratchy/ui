import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Checkbox from "./checkbox";

test("Checkbox should work as intended", () => {
  const { container } = render(<Checkbox onClick={() => {}} />);
  const component = container.querySelector("input");

  expect(component).not.toBeChecked();

  fireEvent.click(component);

  expect(component).toBeChecked();
});

test("Checkbox should run callback with value", () => {
  let data = false;
  const { container } = render(<Checkbox onClick={(newValue) => data = newValue} />);
  const component = container.querySelector("input");

  fireEvent.click(component);

  expect(data).toBe(true);
});

test("Checkbox can have a label", () => {
  const { getByText } = render(<Checkbox label="option 1" />);
  const component = getByText("option 1");

  expect(component).toBeDefined();
});

test("Checkbox can be checked by default", () => {
  const { container } = render(<Checkbox defaultValue={true} />);
  const component = container.querySelector("input");

  expect(component).toBeChecked();
});


test("Checkbox can receive customization", () => {
  const { container } = render(<Checkbox label="Click me!" classNameSuffix="primary" />);
  const label = container.querySelector("label");
  const input = container.querySelector("input");

  expect(label).toHaveAttribute("class", "checkbox__label checkbox__label--primary");
  expect(input).toHaveAttribute("class", "checkbox__input checkbox__input--primary");
  expect(container.firstChild).toHaveAttribute("class", "checkbox checkbox--primary");
});

