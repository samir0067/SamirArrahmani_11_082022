import React, { FC } from "react";
import { Header } from "../layout/Header";
import "./home.css";
import { Footer } from "../layout/Footer";

const Home: FC = () => {
  return (
    <div className="container">
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
