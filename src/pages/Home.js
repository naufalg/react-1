import React, { useState } from "react";

// react router
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [heading, setHeading] = useState("Hello ");
  let handleChange = (event) => {
    setInputText(event.target.value);
  };

  // console.log(inputText.length);
  // if (inputText !== "") {
  //     setHeading("Hello, ")
  // }

  return (
    <div className="container text-center">
      {/* <nav className="menu">
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" for="menu-open">
          <img
            className="img-logo"
            src="./assets/images/javascript-logo.png"
            alt=""
          />
        </label>
        <a
          href="https://naufalghifari.netlify.app/pages/portfolio/portfolio.html"
          className="menu-item top"
        >
          <img className="img-logo" src="./assets/images/NG-text.png" alt="" />
        </a>
        <a
          href="./route/pages/js-intro/js-intro.html"
          className="menu-item top-right"
        >
          <img
            className="img-logo"
            src="./assets/images/1step-black.png"
            alt=""
          />
        </a>
        <a
          href="./route/pages/js-cond/js-conditional.html"
          className="menu-item bot-right"
        >
          <img className="img-logo" src="./assets/images/if-else.png" alt="" />
        </a>
        <a href="./route/pages/js-2.html" className="menu-item bottom">
          <img className="img-logo" src="./assets/images/next.png" alt="" />
        </a>
        <a
          href="./route/pages/js-loop/js-loop.html"
          className="menu-item bot-left"
        >
          <img
            className="img-logo"
            src="./assets/images/loop-logo.png"
            alt=""
          />
        </a>
        <a
          href="./route/pages/js-func/js-func.html"
          className="menu-item top-left"
        >
          <img
            className="img-logo"
            src="./assets/images/arrow-function.png"
            alt=""
          />
        </a>
      </nav> */}
      <br />
      <h1>
        {" "}
        {heading} {inputText}{" "}
      </h1>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            value={inputText}
            placeholder="your name"
          />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
