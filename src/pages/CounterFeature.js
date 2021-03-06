import React from "react";
import CounterFunct from "../Components/Function/CounterFunct";
import CounterClass from "../Components/Function/CounterClass";
import BackTop from '../Components/Web-Elements/BackTop'


export default function CounterFeature() {
  return (
    <div className="container text-center">
    <BackTop to="/"></BackTop>
      <h1>React Counter Feature</h1>
      <div className="container text-center">
        <CounterFunct />
        <hr className="featurette-divider"></hr>
        <CounterClass />
      </div>
    </div>
  );
}
