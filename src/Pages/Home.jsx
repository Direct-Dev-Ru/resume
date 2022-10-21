import React, { Fragment } from "react";
import Summary from "../Components/Summary";
import Articles from "../Components/Articles";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Interests from "../Components/Interests";
import Experience from "../Components/Experience";

export default () => (
  <Fragment>
    <Summary />
    {/* <Articles />
    <Projects /> */}
    <div className="row">
      <div className="col-lg-6">
        <Articles />
      </div>
      <div className="col-lg-6">
        <Projects />
      </div>
    </div>

    <div className="row">
      <div className="col-lg-9">
        <Experience />
      </div>
      <div className="col-lg-3">
        <Skills />
        <Interests />
      </div>
    </div>
  </Fragment>
);
