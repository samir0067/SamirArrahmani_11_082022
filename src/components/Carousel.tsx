import React, { FC, Fragment, useState } from "react";
import "./carousel.css";

type CarouselProps = {
  title?: string;
  pictures?: string[];
};

export const Carousel: FC<CarouselProps> = ({ title, pictures = [] }) => {
  const [index, setIndex] = useState<number>(0);

  const nextImage = (currentPictures: number, numbersPictures: number) => {
    if (currentPictures === 0) {
      setIndex(numbersPictures - 1);
    } else {
      setIndex(currentPictures - 1);
    }
  };

  const previousImage = (currentPictures: number, numbersPictures: number) => {
    if (currentPictures >= numbersPictures - 1) {
      setIndex(0);
    } else {
      setIndex(currentPictures + 1);
    }
  };

  return (
    <Fragment>
      <div className="carousel" style={{ transform: `translateX(${-100 * index}%)` }}>
        <ul style={{ width: `${100 * pictures.length}%` }}>
          {pictures?.map((picture, index) => (
            <li key={index}>
              <img src={picture} alt={title} width="100%" />
            </li>
          ))}
        </ul>
      </div>
      <div className="counter">
        <p>{`${index + 1} / ${pictures.length}`}</p>
      </div>
      {pictures.length > 1 && (
        <div className="arrow">
          <div className="arrowNext" onClick={() => nextImage(index, pictures.length)} />
          <div className="arrowPrevious" onClick={() => previousImage(index, pictures.length)} />
        </div>
      )}
    </Fragment>
  );
};
