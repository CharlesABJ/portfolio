import React, { useState } from "react";
import "./CardSkills.min.css";

function CardSkills(props) {
  const [isActiveSkills, setIsActiveSkills] = useState(props.isActive);

  const activeSkills = () => {
    setIsActiveSkills(!isActiveSkills);
  };

  return (
    <div
      id={isActiveSkills ? "active-skills" : null}
      onClick={() => activeSkills()}
      data-info={props.dataInfo}
      title={props.subTitle}
      className="card-skills"
    >
      <div>
        <img src={props.cardUrl} alt={props.cardTitle} />
      </div>
      <h4>{props.cardTitle}</h4>
    </div>
  );
}

export default CardSkills;
