import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

import "./Style.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container">
        <a className="navbar-brand " href="#">
          <img className="logo" src="logo192.png"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="home" className="nav-link active" aria-current="page" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#about" className="nav-link" >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#service" className="nav-link" >
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#resume" className="nav-link" >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <Link to="#contact" className="nav-link" >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
