// CardProjects.js

import React from "react";
import "./CardProjects.css";
import TechnoModal from "../TechnoModal/TechnoModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CardProjects(props) {
  return (
    <div
      className={`card-projects ${props.isCardVisible ? "animate-card" : ""}`}
    >
      <div className="cover-image">
        <div className="overlay"></div>
        <img src={props.imageSrc} alt={props.titleProject} />
      </div>
      <h3>{props.titleProject}</h3>
      <p>{props.missionProjectResume}</p>
      <p onClick={props.onClick} className="see-more">
        Voir plus
        <FontAwesomeIcon role={faArrowRight} />
      </p>
      <ul className="techno-use">
        {props.technoName.map((techno, index) => (
          <TechnoModal key={index} technoName={techno} />
        ))}
      </ul>
    </div>
  );
}

export default CardProjects;
