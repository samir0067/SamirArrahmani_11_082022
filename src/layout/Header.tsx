import React, { FC } from "react";
import "./header.css";

type HeaderProps = {
  title?: string;
  className?: string;
  content?: JSX.Element;
};

export const Header: FC<HeaderProps> = ({ title, className, content }) => {
  return (
    <header className={className}>
      {title && (
        <div className="titleContainer">
          <h2>{title}</h2>
        </div>
      )}
      {content && content}
    </header>
  );
};
