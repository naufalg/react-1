import React, { useState } from "react";
import "../Components/style/home.scss";
import BtnNav from "../Components/Web-Elements/BtnNav";
import naufalText from "../Components/Assets/Images/naufalText.png";
import back from "../Components/Assets/Images/back.png";
import next from "../Components/Assets/Images/next.png";
import lock from "../Components/Assets/Images/lock.png";
import react from "../Components/Assets/Images/react.png";
import countLogo from "../Components/Assets/Images/countLogo.png";
import exportLogo from "../Components/Assets/Images/exportLogo.png";
import bmiLogo from "../Components/Assets/Images/bmiLogo.png";
import upCaseLogo from "../Components/Assets/Images/upCaseLogo.png";

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
    <div>
      <nav className="menu">
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" for="menu-open">
          <img className="img-logo react-btn" src={react} alt="" />
        </label>
        <a
          href="https://naufalghifari.netlify.app/pages/portfolio/portfolio.html"
          class="menu-item top"
        >
          <img class="img-logo" src={naufalText} alt="" />
        </a>
        <BtnNav
          to="/CounterFeature"
          src={countLogo}
          class="menu-item top-right"
        />
        <BtnNav
          to="/ProductShow"
          src={exportLogo}
          class="menu-item bot-right"
        />
        <BtnNav to="/Home2" src={next} class="menu-item bottom" />
        <BtnNav to="/BMICalculator" src={bmiLogo} class="menu-item bot-left" />
        <BtnNav to="/UpCase" src={upCaseLogo} class="menu-item bot-left" />
      </nav>
      {/* <br />
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
      </div> */}
    </div>
  );
}
