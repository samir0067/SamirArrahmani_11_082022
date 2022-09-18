import React, { FC, useState } from "react";
import "./dropdown.css";

type DropdownProps = {
  title: string;
  content?: JSX.Element | JSX.Element[];
  className?: string;
};

export const Dropdown: FC<DropdownProps> = ({ content, className, title }) => {
  const [open, setOpen] = useState<boolean>(false);

  const expanding = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? `dropdown ${className} isOpen` : `dropdown ${className}`} onClick={expanding}>
      <div className="dropdownTitle">
        <h2>{title}</h2>
      </div>
      <div className="dropdownContainer">
        <ul>{content}</ul>
      </div>
    </div>
  );
};
