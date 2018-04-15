import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="nav">
          <Link to="/" className="nav-home">
            Home
          </Link>
          <Link to="/project" className="nav-project">
            Projects
          </Link>
          <Link to="/contact" className="nav-contact">
            Contact
          </Link>
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;
