import React from "react";

function Card(props) {
  return (
    <div className ="card text-center" style={{width: '100%', height: '100%'}}>
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
        <h3>Name: {props.title}</h3>
        <h3>Rating: {props.rating}</h3>
        <h3>Phone: {props.phone}</h3>
    </div>
  );
}
export default Card;