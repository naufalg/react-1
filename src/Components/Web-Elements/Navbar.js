import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">React</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Playground
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/CounterFeature">
                Counter Feature
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/ProductShow">
                Product List
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/BMICalculator">
                BMI Calculator
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/TodoApp">
                TodoApp
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/ProfileForm">
                Profile Form
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/upcase">
                To Upper Case
              </Link>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}
