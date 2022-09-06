import React, { FC } from "react";
import RED_LOGO from "../assets/RED_LOGO.svg";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Header: FC = () => {
  return (
    <header>
      <img className="logoHeader" src={RED_LOGO} alt="logo" />
      <nav>
        <ul>
          <li className="liHome">
            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/">
              Accueil
            </NavLink>
          </li>
          <li className="liAboutUs">
            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/a-propos-de-nous">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
