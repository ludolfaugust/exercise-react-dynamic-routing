import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="navbar-ul-left">
        <Link to="/factscat">
          <li>Logo </li>
        </Link>
      </ul>
      <ul className="navbar-ul">
        <Link to="/factscat">
          <li>CatFacts</li>
        </Link>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        {/* 
        <Link to="/catfacts">
          <li>CatFacts</li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default Navbar;
