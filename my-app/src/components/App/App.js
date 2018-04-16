import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      // <Router>
      <div className="app">
        {/* <Nav /> */}
        <div className="hero">
          <h1 className="name">HYOJIN SARCHET</h1>
          <h1 className="title">WEB DEVELOPER</h1>
          <hr className="hr" />
        </div>
        <Home />
        <Project />
        <Contact />
        <Footer />
        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} /> */}
      </div>
      // </Router>
    );
  }
}

export default App;
