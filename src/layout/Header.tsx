import React, { FC } from "react";
import "./header.css";

type HeaderProps = {
  image: string;
  title?: string;
};

export const Header: FC<HeaderProps> = ({ title, image }) => {
  return (
    <div className="headerContainer">
      {title && (
        <div className="titleContainer">
          <h2>{title}</h2>
        </div>
      )}
      <img className="imgHeader" src={image} alt="paysage urbain" />
    </div>
  );
};
