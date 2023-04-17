import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="form2">
      <label htmlFor="text">{props.children}</label>
      <input
        style={{ marginBottom: props.marginBottom, marginTop: props.marginTop }}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
