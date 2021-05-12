import React from "react";

const Button = ({ label, classNameSuffix, onClick }) => {
  const className = `button${classNameSuffix ? ` button--${classNameSuffix}` : ""}`;

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
