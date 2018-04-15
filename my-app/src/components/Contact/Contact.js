import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 className="contact-title">Contact</h1>
        <h3>Love to hear from you all!</h3>
        <p>
          Feel free to reach out to me{" "}
          <a className="email" href="mailto:hyojin.sarchet@gmail.com">
            <img src="images/email2.jpeg" alt="Email" />
          </a>
        </p>
        <p>to schedule for a cup of coffee</p>
        <p>or</p>
        <p>discuss how we can work together.</p>
      </div>
    );
  }
}

export default Contact;
