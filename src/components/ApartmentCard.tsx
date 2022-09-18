import React, { FC } from "react";
import "./apartmentCard.css";

type ApartmentCardProps = {
  picture?: string;
  title?: string;
};

export const ApartmentCard: FC<ApartmentCardProps> = ({ title, picture }) => {
  return (
    <div className="apartmentCard">
      <div className="titleCardContent">
        <h3 className="titleCard">{title}</h3>
      </div>
      <img src={picture} alt={title} />
    </div>
  );
};
