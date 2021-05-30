import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Select from "./select";

test("Can change option in Select component", () => {
  const options = [
    { name: "Option 1", value: "value 1" },
    { name: "Option 2", value: "value 2" },
    { name: "Option 3", value: "value 3" },
  ];
  const { container } = render(<Select options={options} defaultValue="value 1"/>);
  const root = container.firstChild;

  expect(root).toHaveValue("value 1");

  fireEvent.change(container.firstChild, { target: { value: "value 2" } });

  expect(root).toHaveValue("value 2");
});

test("Callback onChange is triggered when option change", () => {
  const handleChange = jest.fn();

  const options = [
    { name: "Option 1", value: "value 1" },
    { name: "Option 2", value: "value 2" },
    { name: "Option 3", value: "value 3" },
  ];

  const { container } = render(
    <Select options={options} onChange={handleChange} />
  );

  fireEvent.change(container.firstChild, { target: { value: "value 2" } });

  expect(handleChange).toHaveBeenCalledWith("value 2");
});

test("Select should be customisable", () => {
  const options = [{ name: "Option 1", value: "value 1" }];

  const { container } = render(
    <Select options={options} classNameSuffix="primary" />
  );

  const root = container.firstChild;
  const option = container.querySelector("option");

  expect(root).toHaveAttribute("class", "select select--primary");
  expect(option).toHaveAttribute(
    "class",
    "select__option select__option--primary"
  );
});

test("Select should accept a default value", () => {
  const options = [
    { name: "Option 1", value: "value 1" },
    { name: "Option 2", value: "value 2" },
  ];

  const { container } = render(
    <Select options={options} classNameSuffix="primary" defaultValue="value 2" />
  );

  expect(container.firstChild).toHaveValue("value 2");
});
