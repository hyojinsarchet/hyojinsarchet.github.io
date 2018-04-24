import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div id="nav" className="nav">
        <a href="#nav" className="nav-project">
          Home
        </a>
        <a href="#project" className="nav-project">
          Projects
        </a>
        <a href="#contact" className="nav-contact">
          Contact
        </a>
      </div>
    );
  }
}

export default Nav;
