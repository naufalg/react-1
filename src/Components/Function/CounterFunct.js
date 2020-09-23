import React from 'react'

// import React, { useState } from "react";
import "../../App.css";
import { connect } from 'react-redux';
import {addCounter, minusCounter} from '../../redux/action/Counter.action';

function CounterFunct(props) {
  // let [count, setCount] = useState(0);

  // let decrement = () => {
  //   if (count <= 0) {
  //     alert("must be +");
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  // let increment = () => {
  //   setCount(count + 1);
  // };

  // console.log("props", props)
  // console.log("props.count", props.count)


  return (
    <div className="row text-center">
      <div className="col-12">
        <h3>Counter (Function)</h3>
        <h5>
          <button className="btn btn-danger rounded-circle" onClick={props.minusCounter}>
            -
          </button>
          &nbsp; {props.counter.count < 0 ? (alert("number must be > 0")) : (props.counter.count)} &nbsp;
          <button className="btn btn-info rounded-circle" onClick={props.addCounter}>
            +
          </button>
        </h5>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log("state", state)
  return {
    counter: state.countReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log("dispatch", dispatch)
  return {
    addCounter : () => dispatch(addCounter()),
    minusCounter : () => dispatch(minusCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterFunct)

// export CounterFunct;
