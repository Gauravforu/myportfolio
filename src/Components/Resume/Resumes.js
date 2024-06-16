 import React, { useEffect, useState } from "react";

import Education from "./Education";
import Programing from "./Programing";
import Projects from "./Projects";
import "./Resumes.css";
import { Workh1 } from "./Workh1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn, faClockRotateLeft, faDisplay, faPalette, faPallet, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { Practice } from "./practice/Practice";

export default function Resumes() {
  const [show, setshow] = useState(0);

  let onchange = () => {
    setshow(1);
  };
  let change = () => {
    setshow(2);
  };
  let change2 = () => {
    setshow(3);
  };
  let change3 = () => {
    setshow(4);
  };
  let change4 = () => {
    setshow(5);
  };

  return (
    <div className="container text align-" id="resume">
      <div className="row ">
        <div className="col-lg-6 button1">
          <div classname="row">
            <div className="col-lg-2 col-md-2 col-sm-2 ">
              <div className="sidebar">
              <div className="peace ">
                <a className="peace1"><FontAwesomeIcon className="fa-lg" icon={faUserGraduate}/></a>
                </div>
              
              <div className="peacesecond ">
              <a className="peace2"><FontAwesomeIcon className="fa-lg" icon={faClockRotateLeft}/></a>
              </div>
              <div className="peacethird">
              <a className="peace3"><FontAwesomeIcon className="fa-lg" icon={faDisplay}/></a>
              </div>
              <div className="peacethird">
              <a className="peace3"><FontAwesomeIcon className="fa-lg" icon={faChartColumn}/></a>
              </div>
              <div className="peacethird">
                <a className="peace3"><FontAwesomeIcon className="fa-lg" icon={faPalette}/></a>
              </div>
              </div>
            </div>
            <div className="col-lg-10">
              <div className=" button-raper ">
                <button className="btn1" type="button" onClick={onchange}>
                  Eduction
                </button>
                <br />
                <br />
                <button className="btn2" type="button" onClick={change}>
                  Work History
                </button>
                <br />
                <br />
                <button className="btn2" type="button" onClick={change2}>
                  Programming Skills
                </button>
                <br />
                <br />
                <button className="btn2" type="button" onClick={change3}>
                  Projects
                </button>
                <br />
                <br />
                <button className="btn2" type="button" onClick={change4}>
                  Interests
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-6 details">
          <div className="detail-wraper">
            {show === 1 ? (
              <Education/>
            ) : show === 2 ? (
              <Workh1/>
            ) : show === 3 ? (
              <Programing/>
            ) : show === 4 ? (
              <Projects/>
            ) : show === 5 ? (
              <Practice/>
            ) : (
              <Programing/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
