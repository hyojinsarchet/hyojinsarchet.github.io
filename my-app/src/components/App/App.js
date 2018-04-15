import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <div className="app">
        <Nav />
        <h1 className="name">HYOJIN SARCHET</h1>
        <h1 className="title">WEB DEVELOPER</h1>
        <hr className="hr" />
        <Home />
        <Project />
        <Contact />
        <Footer />

        {/* <Link to="/" className="nav-home">
            Home
          </Link>
          <Link to="/project" className="nav-project">
            Projects
          </Link>
          <Link to="/contact" className="nav-contact">
            Contact
          </Link>

          <Route exact path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} /> */}
      </div>
      // </BrowserRouter>
    );
  }
}

export default App;
