import React, { Fragment } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./Style.css";
import { Header } from "./Header";

export const Aboutme = () => {
  return (
    <div className="bighome-wraper py-5 " id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <div className="img-fluid picture">
              <img className="photo img-fluid " src="pic.jpg" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6 about ">
             <div className="discription">
            <h2>About Me</h2>
            <p>
              Full stack web and java developer with backend knowledge of advance java 
              along with a knack of building applications with utmost efficiency. Strong 
              professional with a B.E in Computer Science willing to be an asset for an 
              organization.
              I am a collaborative,hardworking solution-oriented with a positive attitude
             and a quick learner love to explore new things technology </p>


            
             <h5>Here are a Few Highlights:</h5>
             <ul>
              <li><span>Full Stack web java devloper</span></li>
              <li><span>Interactive Front End as per design</span></li>
              <li><span>Reactjs</span></li>
              <li><span> JavaScript, CSS, Html </span> </li>
              <li><span>Bootstrap</span></li>
              <li><span>J2EE(Servlet, Jsp)</span></li>
              <li><span>Jdbc</span></li>
              <li><span>Hibernate</span></li>
              <li><span>Spring MVC</span></li>
             </ul>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
