import React, { FC, Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchById } from "../utils/hooks/useFetchById";
import { Footer } from "../layout/Footer";
import { NavBar } from "../layout/NavBar";
import { Carousel } from "../components/Carousel";
import { Header } from "../layout/Header";
import { useMatchMedia } from "../utils/hooks/useMatchMedia";
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
      <main className="apartmentMain"></main>
      <Footer />
    </Fragment>
  );
};

export default Apartment;
