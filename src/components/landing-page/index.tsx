import React from "react";
import Navbar from "../navbar";
import Hero from "./hero";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-start flex-col">
      <Navbar />
      <Hero />
    </div>
  );
};

export default LandingPage;