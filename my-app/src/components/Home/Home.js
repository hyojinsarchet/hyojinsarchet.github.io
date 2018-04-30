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
            {/* <img src="images/in.jpeg" alt="LinkedIn" /> */}
            <i class="fab fa-linkedin" />
          </a>
          <a className="git" href="https://github.com/hyojinsarchet">
            {/* <img src="images/github.png" alt="Github" /> */}
            <i class="fab fa-github-square" />
          </a>
          <a className="email" href="mailto:hyojin.sarchet@gmail.com">
            {/* <img src="images/mail.png" alt="Email" /> */}
            <i class="fas fa-envelope-square" />
          </a>
        </div>

        <Slider {...settings} className="slider">
          <div className="slide-one">
            <h3>Hi!</h3>
          </div>
          <div>
            <h3>I'm a Web Developer based in Washington DC.</h3>
          </div>
          <div>
            <h3>I am also a food blogger, a traveler, and a hiker.</h3>
          </div>
          <div>
            <h3>I like working with React, Javascript, HTML, CSS.</h3>
          </div>
          <div>
            <h3>
              I have experience with Node.js, MongoDB, Express, Mongoose, Redux,
              Ruby, and Ruby on Rails.
            </h3>
          </div>
          <div>
            <h3>Scroll down a little bit to check out my cool projects!</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Home;
