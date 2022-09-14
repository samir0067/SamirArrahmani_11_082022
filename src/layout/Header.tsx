import React, { FC } from "react";
import "./header.css";

type HeaderProps = {
  title?: string;
  className?: string;
  content?: React.ReactNode;
};

export const Header: FC<HeaderProps> = ({ title, className, content }) => {
  return (
    <div className={`headerContainer ${className}`}>
      {title && (
        <div className="titleContainer">
          <h2>{title}</h2>
        </div>
      )}
      {content && content}
    </div>
  );
};
