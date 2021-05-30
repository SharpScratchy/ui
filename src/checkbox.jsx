import React, { useState } from "react";

const Checkbox = ({ onClick, label = "Label", defaultValue = false }) => {
  const [value, setValue] = useState(defaultValue);

  const labelComponent = label ? <label>{label}</label> : <></>;

  const eventHandler = (ev) => {
    if (onClick) {
      onClick(ev.currentTarget.checked);
    }
  };

  return (
    <>
      {label && labelComponent}
      <input
        type="checkbox"
        onClick={eventHandler}
        onChange={(ev) => setValue(ev.currentTarget.checked)}
        checked={value}
      />
    </>
  );
};

export default Checkbox;
