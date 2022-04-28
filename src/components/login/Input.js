import React from "react";
import "./input.css";
import Error from '../helper/Error';

const Input = ({ label, type, name, value, onChance, error, onBlur }) => {
  return (
    <div className="wrapper">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        id={name}
        name={name}
        type={type}
        onChange={onChance}
        value={value}
        onBlur={onBlur}
      />
      { error && <Error error={error} /> }
    </div>
  );
};

export default Input;