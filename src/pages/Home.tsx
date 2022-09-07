import React, { FC } from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import { Header } from "../components/Header";
import imageBackHeadHome from "../assets/imageBackHeadHome.png";
import "./home.css";

const Home: FC = () => {
  return (
    <div className="containerHome">
      <NavBar />
      <Header title="Chez vous, partout et ailleurs" image={<img src={imageBackHeadHome} alt="home landscape" />} />
      <Footer />
    </div>
  );
};

export default Home;
