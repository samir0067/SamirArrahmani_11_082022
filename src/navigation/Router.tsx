import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import Apartment from "../pages/Apartment";

function Router() {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/appartement/:appartementId" element={<Apartment />} />
      <Route path="/a-propos-de-nous" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
