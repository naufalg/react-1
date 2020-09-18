import React from "react";
import { Link } from "react-router-dom";
import "../style/home.scss";
// import "../Assets/Images"

// positon : top; top-right; bot-right; bottom; bot-left; top-left
export default function BtnNav(props) {
  return (
    <a
      href={props.href}
      // className="menu-item"
      className={props.class}
    >
      <Link to={props.to} onClick={props.onClick}>
        <img className="img-logo" src={props.src} alt="" />
      </Link>
    </a>
  );
}
