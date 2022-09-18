import React, { FC, Fragment } from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import imageBackHeadHome from "../assets/imageBackHeadHome.png";
import "./home.css";
import { ApartmentCard } from "../components/ApartmentCard";
import { Link } from "react-router-dom";
import { useFetchAll } from "../utils/hooks/useFetchAll";
import { useMatchMedia } from "../utils/hooks/useMatchMedia";

const Home: FC = () => {
  const { downSm } = useMatchMedia();
  const { allData, isLoading, error } = useFetchAll(`/data.json`);

  if (error) {
    return <h2 className="errorFetch">Oups! un problème dans la récupération des données.</h2>;
  }

  return (
    <Fragment>
      <NavBar />
      <main className="homeMain">
        <Header
          className={downSm ? "headerHomeMobile" : "headerHomeLaptop"}
          title="Chez vous, partout et ailleurs"
          content={<img className="imgHeader" src={imageBackHeadHome} alt="paysage urbain" />}
        />
        <ul className="apartmentContainer">
          {isLoading && <h1>Chargement en cour</h1>}
          {allData.map((apartment) => (
            <li key={apartment.id}>
              <Link to={`/appartement/${apartment.id}`}>
                <ApartmentCard picture={apartment.cover} title={apartment.title} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
