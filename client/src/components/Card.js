import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <h3>Name: {props.title}</h3>
      <h3>Rating: {props.rating}</h3>
      <h3>Phone: {props.phone}</h3>
      <h5>
        <button>Save Me As A Favorite</button>
      </h5>
    </div>
  );
}
export default Card;
