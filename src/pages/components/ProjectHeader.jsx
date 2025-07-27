import React from "react";
import '../../components/header/header.css';
import BtnBack from "./BtnBack";


const ProjectHeader = ({ category, chinese, categorytitle }) => {

  return (
  <>
    <header id="projectheader">
      <div className="container header__container">
        <h1>{categorytitle}</h1>
        <h5 className="text-light">{chinese}</h5>
        <div className="cta">
        <BtnBack />
        </div>
        <div className="scroll__down">
        {category}
        </div>
        <div className="header__socials">
          <span>{category}</span>
        </div>
      </div>
    </header>
  </>
  );
};

export default ProjectHeader;
