import React, { FC } from "react";
import RED_LOGO from "../assets/RED_LOGO.svg";
import { NavLink } from "react-router-dom";
import "./navBar.css";

export const NavBar: FC = () => {
  return (
    <div className="navBar">
      <img className="logoNavBar" src={RED_LOGO} alt="logo" />
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
    </div>
  );
};
