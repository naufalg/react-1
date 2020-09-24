import React from "react";

// import React, { useState } from "react";
import "../Components/style/home.scss";
import BtnNav from "../Components/Web-Elements/BtnNav";
import back from "../Components/Assets/Images/back.png";
import next from "../Components/Assets/Images/next.png";
import lock from "../Components/Assets/Images/lock.png";
import react from "../Components/Assets/Images/react.png";
import reduxCrud from "../Components/Assets/Images/redux-crud.png";
import todoIcon from "../Components/Assets/Images/todoIcon.png";
import useEffectLogo from "../Components/Assets/Images/useEffectLogo.png";
import reduxLogo from "../Components/Assets/Images/redux-logo.png";

// react router
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function Home() {
  // const [inputText, setInputText] = useState("");
  // const [heading, setHeading] = useState("Hello ");
  // let handleChange = (event) => {
  //   setInputText(event.target.value);
  // };

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
        <BtnNav href="" src={back} className="menu-item top" to="/Home2" />
        <BtnNav
          to="/ReduxCrud"
          src={reduxCrud}
          className="menu-item top-right"
        />
        <BtnNav src={lock} className="menu-item bot-right" />
        <BtnNav src={lock} className="menu-item bottom" />
        <BtnNav src={lock} className="menu-item bot-left" />
        <BtnNav src={lock} className="menu-item top-left" />

        <p className="top-caption cptn">Back</p>
        <p className="top-right-caption cptn">Redux CRUD</p>
        <p className="bot-right-caption cptn">Locked</p>
        <p className="bottom-caption cptn">Locked</p>
        <p className="bot-left-caption cptn">Locked</p>
        <p className="top-left-caption cptn">Locked</p>
      </nav>
    </div>
  );
}
