import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Contact from "./routes/Contact";
import Services from "./routes/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
