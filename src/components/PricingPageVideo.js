import React, { Component } from "react";
import ChestExercise from "../assets/ChestExercise.mp4";
import "./PricingPageVideo.css";

class PricingPageVideo extends Component {
  render() {
    return (
      <div className="chestex-video">
        <video autoPlay loop muted id="chestvid">
          <source src={ChestExercise} type="video/mp4" />
        </video>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default PricingPageVideo;
