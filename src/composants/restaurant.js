import React from "react";

const Restaurant = props => {
  return (
    <div className="restaurant">
      <div className="description">
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
      <img
        className="photo-restaurant"
        alt="photo restaurant"
        src={props.photo}
      ></img>
    </div>
  );
};

export default Restaurant;
