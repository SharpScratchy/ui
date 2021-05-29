import React from "react";

const Checkbox = ({ onClick }) => {
  const eventHandler = (ev) => {
    if (onClick) {
      onClick(ev.currentTarget.checked);
    }
  };

  return <input type="checkbox" onClick={eventHandler} />;
};

export default Checkbox;
