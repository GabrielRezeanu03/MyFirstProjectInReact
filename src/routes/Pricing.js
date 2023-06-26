import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingPageVideo from "../components/PricingPageVideo";
import TextBox from "../components/TextBox";
import PricingCards from "../components/Pricing";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <PricingPageVideo
        heading="PRICING"
        text="Choose what is the best for you"
      />
      <TextBox />
      <PricingCards />
      <TextBox />
      <Footer />
    </div>
  );
};

export default Pricing;
