import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <div>
          <h1 className="name">HYOJIN SARCHET</h1>
          <h1 className="title">WEB DEVELOPER</h1>
          <hr className="hr" />
        </div>
        <Home />
        <Project />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
