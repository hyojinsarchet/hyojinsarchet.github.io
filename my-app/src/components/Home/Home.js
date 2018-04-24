import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.css";

class Home extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 4500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
      pauseOnHover: true
    };

    return (
      <div className="home">
        <div className="link-list">
          <a
            className="in"
            href="https://www.linkedin.com/in/hyojin-sarchet-580463b0/"
          >
            <img src="images/in.jpeg" alt="LinkedIn" />
          </a>
          <a className="git" href="https://github.com/hyojinsarchet">
            <img src="images/github.png" alt="Github" />
          </a>
          <a className="email" href="mailto:hyojin.sarchet@gmail.com">
            <img src="images/mail.png" alt="Email" />
          </a>
        </div>

        <Slider {...settings} className="slider">
          <div className="slide-one">
            <h3>Hi!</h3>
          </div>
          <div className="slide-two">
            <h3>I'm a developer based in Washington DC.</h3>
          </div>
          <div className="slide-three">
            <h3>I am also a food blogger, a traveler, and a hiker.</h3>
          </div>
          <div className="slide-four">
            <h3>Want to check out my cool projects?</h3>
          </div>
          <div className="slide-five">
            <h3>Just scroll down a little bit. :)</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Home;
