import React from "react";
import "./Select.scss";

function Select({ name, placeholder, customClass, onChange, options, value }) {
  return (
    <select
      name={name}
      className={`select ${customClass}`}
      onChange={onChange}
      value={value}
    >
      <option value="" disabled selected className="select__option">
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
