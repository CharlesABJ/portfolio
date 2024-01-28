// CardProjects.js

import React from "react";
import "./CardProjects.min.css";
import TechnoModal from "../TechnoModal/TechnoModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { projectList } from "../../datas/projectList";

function CardProjects(props) {
  return (
    <div className={`card-projects ${props.projectClassName}`}>
      <div className="cover-image">
        <div className={`overlay ${props.overlayClassName}`}></div>
        <a target="_blank" href={props.linkProject}>
          <img src={props.imageSrc} alt={props.titleProject} loading="lazy" />
        </a>
      </div>
      <h3>{props.titleProject}</h3>
      <p>{props.missionProjectResume}</p>
      <p onClick={props.onClick} className="see-more">
        Voir plus
        <FontAwesomeIcon icon={faArrowRight} />
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
