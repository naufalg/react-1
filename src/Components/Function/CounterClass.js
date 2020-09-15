// jshint esversion:10
import React, { Component } from "react";
import "../../App.css";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    if (this.state.count <= 0) {
      alert("must be +");
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    return (
      <div className="row text-center">
        <div className="col-12">
          <h3>Counter (Class)</h3>
          <h5>
            <button
              className="btn btn-danger rounded-circle"
              onClick={this.decrement}
            >
              -
            </button>
            &nbsp; {this.state.count} &nbsp;
            <button
              className="btn btn-info rounded-circle"
              onClick={this.increment}
            >
              +
            </button>
          </h5>
        </div>
      </div>
    );
  }
}

export default CounterClass;
