import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import About from "../About/About";
import Project from "../Project/Project";
// import "../Contact/Contact";
// import "../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <About />
      </div>
    );
  }
}

export default App;

// Learn about 'Single Page Web with React' from this link
// https://hackernoon.com/simple-guide-to-creating-a-single-page-app-with-react-router-6b6f709a2e3f
