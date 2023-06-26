import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextBox from "../components/TextBox";
import HomepageVideo from "../components/HomepageVideo";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomepageVideo />
      <TextBox />
      <Footer />
    </div>
  );
};

export default Home;
