// jshint esversion:10
import React from "react";
// routerDom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// css
import "./App.css";
// pages
import Home from "./pages/Home";
import ProductShow from "./Components/ProductShow";
import CounterFeature from "./pages/CounterFeature";
import Users from "./pages/Users";
import TodoApp from "./pages/TodoApp";
import BMICalculator from "./pages/BMICalculator";
import ProfileForm from "./pages/ProfileForm";
import UpCase from "./pages/UpCase";
// web elements
import Navbar from "./Components/Web-Elements/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/CounterFeature">
            <CounterFeature />
          </Route>
          <Route path="/ProductShow">
            <ProductShow />
          </Route>
          <Route path="/TodoApp">
            <TodoApp />
          </Route>
          <Route path="/BMICalculator">
            <BMICalculator />
          </Route>
          <Route path="/ProfileForm">
            <ProfileForm />
          </Route>
          <Route path="/UpCase">
            <UpCase />
          </Route>
          <Route path="/Users/:id">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
