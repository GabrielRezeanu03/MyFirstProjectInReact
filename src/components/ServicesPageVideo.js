import React, { Component } from "react";
import zbarGirl from "../assets/ZbarGirl.mp4";
import "./ServicesPageVideo.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

class ServicesPageVideo extends Component {
  render() {
    return (
      <div className="zbargirl-video">
        <video autoPlay loop muted id="zbarvid">
          <source src={zbarGirl} type="video/mp4" />
        </video>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <div className="wrapper">
            <div className="static-txt">[RESULTS] = </div>
            <ul className="dynamic-txts">
              <li><span>Motivation</span></li>
              <li><span>Hard work</span></li>
              <li><span>Discipline</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesPageVideo;
