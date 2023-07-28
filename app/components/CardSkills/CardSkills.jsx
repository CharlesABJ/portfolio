import React from "react";
import "./CardSkills.min.css";

function CardSkills(props) {
  return (
    <div
      data-info={props.dataInfo}
      title={props.subTitle}
      className={`card-skills ${props.className}`}
    >
      <div>
        <img src={props.cardUrl} alt={props.cardTitle} />
      </div>
      <h4>{props.cardTitle}</h4>
    </div>
  );
}

export default CardSkills;
