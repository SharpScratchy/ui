import React, { useState } from "react";
import cssClassSuffixer from "./cssClassSuffixer";

const Select = ({ options, onChange, classNameSuffix, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  const optionComponentList = options.map((option) => (
    <option
      key={option.name}
      value={option.value}
      className={cssClassSuffixer("select__option", classNameSuffix)}
    >
      {option.name}
    </option>
  ));

  const onChangeHandler = (ev) => {
    setValue(ev.target.value);
    if (onChange) {
      onChange(ev.target.value);
    }
  };

  return (
    <select
      className={cssClassSuffixer("select", classNameSuffix)}
      onChange={onChangeHandler}
      value={value}
    >
      {optionComponentList}
    </select>
  );
};

export default Select;
