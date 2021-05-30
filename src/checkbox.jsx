import React, { useState } from "react";
import cssClassSuffixer from "./cssClassSuffixer";

const Checkbox = ({
  onClick,
  label = "Label",
  defaultValue = false,
  classNameSuffix,
}) => {
  const [value, setValue] = useState(defaultValue);

  const labelComponent = label ? (
    <label className={cssClassSuffixer("checkbox__label", classNameSuffix)}>
      {label}
    </label>
  ) : (
    <></>
  );

  const eventHandler = (ev) => {
    if (onClick) {
      onClick(ev.currentTarget.checked);
    }
  };

  return (
    <div className={cssClassSuffixer("checkbox", classNameSuffix)}>
      {label && labelComponent}
      <input
        className={cssClassSuffixer("checkbox__input", classNameSuffix)}
        type="checkbox"
        onClick={eventHandler}
        onChange={(ev) => setValue(ev.currentTarget.checked)}
        checked={value}
      />
    </div>
  );
};

export default Checkbox;
