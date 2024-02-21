import React from "react";
import "./Select.scss";

function Select({ name, placeholder, customClass, onChange }) {
  return (
    <select
      name={name}
      className={`select ${customClass}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Select;
