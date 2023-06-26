import React, { Component } from "react";
import "./ContactImage.css";
import Form from "./Form";

class ContactImage extends Component {
  render() {
    return (
      <div className="contact-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <Form />
        </div>
      </div>
    );
  }
}

export default ContactImage;
