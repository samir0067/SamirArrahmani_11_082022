import React, { FC, Fragment } from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import { Dropdown } from "../components/Dropdown";
import { Header } from "../layout/Header";
import imageBackHeadAboutUs from "../assets/imageBackHeadAboutUs.png";
import "./aboutUs.css";

const AboutUs: FC = () => {
  const content = {
    reliability:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    respect:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    security:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };

  return (
    <Fragment>
      <NavBar />
      <main className="containerAboutUs">
        <Header
          className="headerAboutUs"
          content={<img className="imgHeader" src={imageBackHeadAboutUs} alt="paysage de montagne" />}
        />
        <Dropdown title="Fiabilité" content={<p>{content.reliability}</p>} />
        <Dropdown title="Respect" content={<p>{content.respect} </p>} />
        <Dropdown title="Service" content={<p>{content.service} </p>} />
        <Dropdown title="Sécurité" content={<p>{content.security}</p>} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default AboutUs;
