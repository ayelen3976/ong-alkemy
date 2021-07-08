import React from "react";

function HomeFormInput({
  className,
  type,
  handleChange,
  placeholder,
  value,
  name,
  onClick,
}) {
  return (
    <input
      className={className}
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
      name={name}
      onClick={onClick}
    />
  );
}

export default HomeFormInput;
