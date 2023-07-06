import React from "react";
import "./CardSkills.css";

function CardSkills(props) {
  return (
    <div className="card-skills">
      <div>
        <img src={props.cardUrl} alt={props.cardTitle} />
      </div>
      <h4>{props.cardTitle}</h4>
    </div>
  );
}

export default CardSkills;
