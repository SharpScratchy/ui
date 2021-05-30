import React from "react";
import cssClassSuffixer from "./cssClassSuffixer";

const Button = ({ label, classNameSuffix, onClick }) => {
  const className = cssClassSuffixer("button", classNameSuffix);

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
