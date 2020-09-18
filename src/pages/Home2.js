import React, { useState } from "react";
import "../Components/style/home.scss";
import BtnNav from "../Components/Web-Elements/BtnNav";
import naufalText from "../Components/Assets/Images/naufalText.png";
import back from "../Components/Assets/Images/back.png";
import next from "../Components/Assets/Images/next.png";
import lock from "../Components/Assets/Images/lock.png";
import react from "../Components/Assets/Images/react.png";
import formLogo from "../Components/Assets/Images/formLogo.png";
import todoIcon from "../Components/Assets/Images/todoIcon.png";
import useEffectLogo from "../Components/Assets/Images/useEffectLogo.png";
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
        <BtnNav
          href=""
          src={back}
          class="menu-item top"
          to="/"
        />
        <BtnNav
          to="/ProfileForm"
          src={formLogo}
          class="menu-item top-right"
        />
        <BtnNav
          to="/TodoApp"
          src={todoIcon}
          class="menu-item bot-right"
        />
        <BtnNav src={lock} class="menu-item bottom" />
        <BtnNav to="/UseEffectTest" src={useEffectLogo} class="menu-item bot-left" />
        <BtnNav src={lock} class="menu-item bot-left" />
        
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
