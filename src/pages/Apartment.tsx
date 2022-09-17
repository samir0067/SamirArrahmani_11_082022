import React, { FC, Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchById } from "../utils/hooks/useFetchById";
import { Footer } from "../layout/Footer";
import { NavBar } from "../layout/NavBar";
import { Carousel } from "../components/Carousel";
import { Header } from "../layout/Header";
import { useMatchMedia } from "../utils/hooks/useMatchMedia";
import Stars from "../components/Stars";
import "./apartment.css";

const Apartment: FC = () => {
  const navigate = useNavigate();
  const { downSm } = useMatchMedia();
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
      <Header
        className={downSm ? "headerApartmentMobile" : "headerApartmentLaptop"}
        content={<Carousel pictures={data?.pictures} title={data?.title} />}
      />
      <main className="apartmentMain">
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
            {data?.rating && <Stars rating={data.rating} />}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Apartment;
