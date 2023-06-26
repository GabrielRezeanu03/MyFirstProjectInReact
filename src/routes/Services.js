import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicesContainer from "../components/ServicesContainer";
import ServicesPageVideo from "../components/ServicesPageVideo";
import TextBox from "../components/TextBox";

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicesPageVideo heading='SERVICES' text='PROFESSIONAL PERSONAL TRAINERS' />
      <TextBox />
      <ServicesContainer />
      <TextBox />
      <Footer />
    </div>
  );
};

export default Services;
