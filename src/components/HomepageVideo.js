import React from "react";
import { Link } from "react-router-dom";
import "./HomepageVideo.css";
import hexagonVideo from "../assets/hexagon3D.mp4";

const HomepageVideo = () => {
  return (
    <div className="hexagon">
      <video autoPlay loop muted id="video">
        <source src={hexagonVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>DEVELOPERS's FITNESS GYM</h1>
        <h2>
          FITNESS | <span>CIRCUIT TRAINING</span> | CARDIO
        </h2>

        <div>
          <Link to="/services" className="btn btn-dark">
            Services
          </Link>
          <Link to="/contact" className="btn btn-light">
            Go for
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomepageVideo;
