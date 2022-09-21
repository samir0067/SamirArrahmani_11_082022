import React, { FC, Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchById } from "../utils/hooks/useFetchById";
import { Footer } from "../layout/Footer";
import { NavBar } from "../layout/NavBar";
import { Header } from "../layout/Header";
import { Carousel } from "../components/Carousel";
import { Dropdown } from "../components/Dropdown";
import { Notes } from "../components/Notes";
import "./apartment.css";

const Apartment: FC = () => {
  const navigate = useNavigate();
  const { appartementId } = useParams<string>();
  const { data, isLoading, error } = useFetchById(`/data.json`, appartementId!);

  useEffect(() => {
    if (!isLoading) {
      if (!data) return navigate("/erreur", { replace: true });
    }
  }, [isLoading]);

  if (error) {
    return <h2 className="errorFetch">Oups! un problème dans la récupération des données.</h2>;
  }

  return (
    <Fragment>
      <NavBar />
      <main className="apartmentMain">
        <Header className="headerApartment" content={<Carousel pictures={data?.pictures} title={data?.title} />} />
        <section className="information">
          <div className="apartmentInfo">
            <h2>{data?.title}</h2>
            <h4>{data?.location}</h4>
            <ul className="tagsInfo">
              {data?.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="informationHost">
            <div className="hostDescription">
              <h4>{data?.host.name}</h4>
              <div className="hostPicture">
                <img src={data?.host.picture} alt={data?.host.name} />
              </div>
            </div>
            {data?.rating && <Notes rating={data.rating} />}
          </div>
        </section>
        <section className="properties">
          <Dropdown title="Description" className="dropdownApartment" content={<p>{data?.description}</p>} />
          <Dropdown
            title="Équipements"
            className="dropdownApartment"
            content={data?.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Apartment;
