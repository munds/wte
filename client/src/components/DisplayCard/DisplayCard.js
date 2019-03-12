import React from "react";
import "./DisplayCard.css";

const DisplayCard = props => (
  <div className="img-container">
    <img alt={props.name} src={props.image} />
  </div>
);

export default DisplayCard;
