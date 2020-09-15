// jshint esversion:10
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterFunct from "./Components/Function/CounterFunct";
import CounterClass from "./Components/Function/CounterClass";
import ProductShow from "./Components/ProductShow";

function App() {
  return (
    <div className="App">
    <br/>
    <br/>
      <div className="container text-center">
        <CounterFunct />
        <hr className="featurette-divider"></hr>
        <CounterClass />
        <hr className="featurette-divider"></hr>
        <ProductShow />
      </div>
    </div>
  );
}

export default App;
