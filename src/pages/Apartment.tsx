import React, { FC, Fragment } from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import "./aboutUs.css";
import { Navigate, useParams } from "react-router-dom";
import { useFetchById } from "../utils/hooks/useFetchById";

const Apartment: FC = () => {
  const { appartementId } = useParams<string>();
  const { data, isLoading, error } = useFetchById(`/data.json`, appartementId);
  console.log("appartementId ==>", appartementId);
  console.log("data ==>", data);

  if (!data) {
    return <Navigate to="/*" replace />;
  }

  return (
    <Fragment>
      <NavBar />
      <main className="containerHome"></main>
      <Footer />
    </Fragment>
  );
};

export default Apartment;
