import React from "react";
import "./Arrow.css";

function Arrow(props) {
  return <i onClick={props.onClick} className={props.className}></i>;
}

export default Arrow;
