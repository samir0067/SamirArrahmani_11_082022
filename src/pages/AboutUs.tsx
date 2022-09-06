import React, { FC } from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import "./aboutUs.css";

const AboutUs: FC = () => {
  return (
    <div className="containerAboutUs">
      <NavBar />
      <Footer />
    </div>
  );
};

export default AboutUs;
