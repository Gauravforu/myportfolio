import React, { Fragment } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashLink as Link } from "react-router-hash-link";
import "./Style.css";
import Navbar from "./Navbar";
import Typed from "react-typed";
export const Header = () => {
  return (
    <Fragment>
    <div className="header-wraper">
    <div className="container">
      <div className="main-info text-center">
        <h1>Full Stack Web Devloper</h1>
        <Typed className="typed-text"
          strings=
          {[
            "Web Devloper",
            "Web Design",
            "Java",
            "Advance Java",
            "Spring",
            "Hibernate",
            "Jdbc",
            "J2EE",
            "React js",
            "JavaScript",
            "Css",
            "BootStrap",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop={Infinity}
         />
         <div className="button pt-4">
         <Link to="#contact" className="btn-main-offer ">Contact me</Link>
         </div>
      </div>
      </div>
    </div>
    </Fragment>
  );
};
