import React from "react";
import "./Input.scss";

function Input({ name, placeholder, customClass, onChange, value, type }) {
  return (
    <input
      name={name}
      className={`input ${customClass}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
}

export default Input;
