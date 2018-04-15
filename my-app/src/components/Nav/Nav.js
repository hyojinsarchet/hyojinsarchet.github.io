import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/" className="nav-home">
          Home
        </Link>
        <Link to="/project" className="nav-project">
          Projects
        </Link>
        <Link to="/contact" className="nav-contact">
          About|Contact
        </Link>
      </div>
    );
  }
}

export default Nav;
