import React from "react";
import "./Herocard.css";

export default function Herocard(props) {
  return (
    <div className="heroCard">
      <div className="img__container">
        <img src={props.url} alt={props.name} />
      </div>
      <p>
        <b>Name:</b> {props.name}
      </p>
      <p>
        <b>Description:</b> {props.description}
      </p>
      <p>
        <b>Age:</b> {props.age}
      </p>
      <p>
        <b>Superpower:</b> {props.superpower}
      </p>
    </div>
  );
}
