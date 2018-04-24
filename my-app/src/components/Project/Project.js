import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div id="project" className="project">
        <h1 className="project-title">Projects</h1>
        <div className="project-one">
          <h2>Flash Card Game</h2>
          <a href="https://hyojinsarchet.github.io/Flash-Card-Game/">
            <img src="images/flash-card-game.png" alt="project-one" />
          </a>
          <p> - Created with Html, CSS, JavaScript</p>
          <p>
            - Users can learn some basic Korean words while playing this game.
          </p>
        </div>
        <div className="project-two">
          <h2>Where have you been?</h2>
          <a href="https://wherehaveyoubeen.herokuapp.com/">
            <img
              className="project-two-img"
              src="images/wherehaveyoubeen.png"
              alt="project-two"
            />
          </a>
          <p>
            - Created with Html, CSS, JavaScript, Node.js, Express, Mongo DB,
            Mongoose, Google Maps APIs, Materialize CSS
          </p>
          <p>
            - Users can arrange their future trips on the map and past trips on
            the remaining pages.
          </p>
        </div>
        <div className="project-three">
          <h2>Coffee runs through me</h2>
          <a href="http://woozy-answer.surge.sh/">
            <img src="images/coffeerunsthroughme.png" alt="project-three" />
          </a>
          <p>
            - Created with React, Html, CSS, Node.js, Express, Mongoose, Mongo
            DB
          </p>
          <p>
            - Users can create their profiles and track of how much caffeine
            they consume daily.
          </p>
        </div>
        <div className="project-four">
          <h2>Meal Prep Helper</h2>
          <a href="http://mealprephelper.surge.sh/">
            <img src="images/mealprephelper.png" alt="project-four" />
          </a>
          <p>- Created with React, Html, CSS, React Slick, React Material UI</p>
          <p>
            - Users can see the meal suggestions, get ideas, and plan their
            meals for a week.
          </p>
        </div>
      </div>
    );
  }
}

export default Project;
