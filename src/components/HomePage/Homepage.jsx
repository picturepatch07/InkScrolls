import React from "react";
import Header from "../Header/Header";
import Homemain from "./Homemain";
import Recommended from "../Recommended/Recommended";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Homemain />
      <Recommended />
    </div>
  );
};

export default Homepage;
