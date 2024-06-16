import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
//import Aboutme  from './Aboutme';
import "./Style.css";

export const Services = () => {
  return (
    
     <div className="services-wraper" id="service">
    <div className="container">
    <div className='row heading-row'>
      <h1>Works</h1>
      <div className='border bottom-border border-success'>

      </div>
    </div>
    <div className="row">
        <div className="col-lg-3">
           <div className='first'>
            <h2>Web Design</h2>
            <p className='detail'>I approach each poject carefully and try to achive best design 
                i always focus on the result.
             </p>
           </div>
        </div>
        <div className="col-lg-3">
        <div className='first'>
            <h2>Front End</h2>
            <p className='detail'> Front end devlopment with the help of JavaScript , Html and Css
                
             </p>
           </div>
        </div>
        <div className="col-lg-3">
        <div className='first'>
            <h2>Reactjs</h2>
            <p className='detail'>Reactjs is used for devlopment of single page application with
               bootstrap and css for design.
             </p>
           </div>
        </div>
        <div className="col-lg-3">
        <div className='first'>
            <h2>Backend</h2>
            <p className='detail'>Java is used for the backend devlopment technology like 
                  J2EE , Jdbc , Hibernate , Spring MVC is used for the connection with the server
             </p>
           </div>
        </div>
    </div>

    </div>

    </div>
    
  );
};
