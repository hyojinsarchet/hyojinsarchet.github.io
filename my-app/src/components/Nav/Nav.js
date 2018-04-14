import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/project" className="project">
          Projects
        </Link>
        <Link to="/contact" className="contact">
          Contact
        </Link>
      </div>
    );
  }
}

export default Nav;
