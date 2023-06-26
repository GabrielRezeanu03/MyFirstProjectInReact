import React from "react";
import ContactImage from "../components/ContactImage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextBox from "../components/TextBox";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactImage heading="CONTACT" text="We are waiting for you" />
      <TextBox />
      <Footer />
    </div>
  );
};

export default Contact;
