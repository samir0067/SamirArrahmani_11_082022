import React, { FC } from "react";
import star from "../assets/stars.svg";
import { useMatchMedia } from "../utils/hooks/useMatchMedia";

type StarsProps = {
  rating: number;
};

const Stars: FC<StarsProps> = ({ rating = 0 }) => {
  const { downSm } = useMatchMedia();
  const stars: any[] = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg key={i} width={downSm ? 15 : 30} height={downSm ? 15 : 30}>
        <use xlinkHref={star.concat("#star")} fill={i < rating ? "#FF6060" : "#E3E3E3"}></use>
      </svg>,
    );
  }

  return <div style={{ display: "flex", gap: downSm ? 5 : 10 }}>{stars}</div>;
};

export default Stars;
