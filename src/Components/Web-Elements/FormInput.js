import React from "react";

export default function FormInput(props) {
  return (
    <div>
      <label className="h4">{props.inputTitle}</label>
      <input
        type={props.type}
        className="w-100 form-control"
        autoComplete="off"
        placeholder={props.placeholder}
        onChange={props.changeHandler}
        value={props.state}
        required
      />
    </div>
  );
}
