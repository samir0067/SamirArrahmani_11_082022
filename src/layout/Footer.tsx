import React, { FC } from "react";
import WHITE_LOGO from "../assets/WHITE_LOGO.svg";
import "./footer.css";

export const Footer: FC = () => {
  return (
    <footer>
      <img className="logoFooter" src={WHITE_LOGO} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
