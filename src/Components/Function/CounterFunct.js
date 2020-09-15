// jshint esversion:10
import React, { useState } from "react";
import "../../App.css";

function CounterFunct() {
  let [count, setCount] = useState(0);

  let decrement = () => {
    if (count <= 0) {
      alert("must be +");
    } else {
      setCount(count - 1);
    }
  };

  let increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="row text-center">
      <div className="col-12">
        <h3>Counter (Function)</h3>
        <h5>
          <button className="btn btn-danger rounded-circle" onClick={decrement}>
            -
          </button>
          &nbsp; {count} &nbsp;
          <button className="btn btn-info rounded-circle" onClick={increment}>
            +
          </button>
        </h5>
      </div>
    </div>
  );
}

export default CounterFunct;
