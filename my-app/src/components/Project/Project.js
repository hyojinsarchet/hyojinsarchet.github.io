import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <h1>Projects</h1>
        <div className="project-one">
          <h2>Flash Card Game</h2>
          <p>Used skill: bla bla bla...</p>
          <a className="project-one-link" href="">
            <img src="" alt="project-one" />
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
