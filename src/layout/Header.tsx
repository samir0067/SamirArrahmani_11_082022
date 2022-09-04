import React, { FC } from "react";
import LOGO from "../assets/LOGO.svg";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Header: FC = () => {
  return (
    <header>
      <img className="logo" src={LOGO} alt="logo" />
      <nav>
        <ul>
          <li className="liHome">
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
              Accueil
            </NavLink>
          </li>
          <li className="liAboutUs">
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/a-propos-de-nous">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
