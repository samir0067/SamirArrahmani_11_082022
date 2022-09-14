import React, { FC, Fragment } from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import imageBackHeadHome from "../assets/imageBackHeadHome.png";
import "./home.css";
import { ApartmentCard } from "../components/ApartmentCard";
import { Link } from "react-router-dom";
import { useFetchAll } from "../utils/hooks/useFetchAll";

const Home: FC = () => {
  const { allData, isLoading, error } = useFetchAll(`/data.json`);

  if (error) {
    return <h2 className="text-center">Oups!! il y a eu un problème</h2>;
  }

  return (
    <Fragment>
      <NavBar />
      <Header title="Chez vous, partout et ailleurs" image={imageBackHeadHome} />
      <main className="containerHome">
        <section>
          <ul className="apartmentContainer">
            {isLoading && <h1>Chargement en cour</h1>}
            {allData.map((apartment, index) => (
              <li key={apartment.id}>
                <Link to={`/appartement/${apartment.id}`}>
                  <ApartmentCard picture={apartment.cover} title={apartment.title} id={index} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
