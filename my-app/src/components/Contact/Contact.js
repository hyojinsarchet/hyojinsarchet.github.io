import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 className="contact-title">Contact</h1>
        <h3 className="contact-s-title">Would love to hear from you all!</h3>
        <p>Feel free to reach out to me through</p>
        <p className="email-address">hyojin.sarchet@gmail.com</p>
        <p>
          <a className="email" href="mailto:hyojin.sarchet@gmail.com">
            <img src="images/email2.jpeg" alt="Email" />
          </a>
        </p>
        <p>to schedule a cup of coffee or</p>
        <p>discuss how we can work together.</p>
      </div>
    );
  }
}

export default Contact;
