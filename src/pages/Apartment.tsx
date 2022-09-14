import React, { FC } from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import "./aboutUs.css";
import { useParams } from "react-router-dom";

const Apartment: FC = () => {
  const { appartementId } = useParams<string>();

  console.log("appartementId ==>", appartementId);

  return (
    <div className="containerAppartement">
      <NavBar />
      <Footer />
    </div>
  );
};

export default Apartment;
