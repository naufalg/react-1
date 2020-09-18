import React from "react";
import { Link } from "react-router-dom";

export default function BackTop(props) {
  return (
    <div className="text-left">
      <Link to={props.to}>
        <button className="btn btn-warning">Back</button>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
}
