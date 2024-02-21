import React from "react";
import "./Select.scss";

function Select({ name, placeholder, customClass, onChange, options }) {
  return (
    <select name={name} className={`select ${customClass}`} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
