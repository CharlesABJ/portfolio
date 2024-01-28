import React from "react";
import "./TechnoModal.css";

function TechnoModal(props) {
  return (
    <li>
      <span className="techno-modal">{props.technoName}</span>
    </li>
  );
}

export default TechnoModal;
