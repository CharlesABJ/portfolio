import React from "react";
import "./CardProjects.css";
import TechnoModal from "../TechnoModal/TechnoModal";

function CardProjects(props) {
  return (
    <div className="card-projects">
      <div className="cover-image">
        <img src={props.imageSrc} alt={props.titleProject} />
      </div>
      <h3>{props.titleProject}</h3>
      <p>{props.missionProjectResume}</p>
      <p onClick={props.onClick} className="see-more">
        Voir plus <i className="fa-solid fa-arrow-right"></i>
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
