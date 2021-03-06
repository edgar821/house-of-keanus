import React from "react";
import "./style.css";

function Title(props) {
  return <h2 className="title"><span>{props.title}</span> - <span className="score">Score: {props.score}</span></h2>;
}

export default Title;
