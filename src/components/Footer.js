import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaHome,
  FaSearchLocation,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />

            <div>
              <p>523 Dragon St.</p>
              <h4>Cluj-Napoca</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              1-800-123-1532
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              devsgym@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About this stylish gym</h4>
          <p>Our clients come to the gym not only to strengthen their physical health, but especially to spend their free time and relax after a tiring day at work</p>
          <div className="social">
            <FaFacebook id="facebook"
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" , }}
            />
            <FaTwitter id="twitter"
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaLinkedin id="linkedin"
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
