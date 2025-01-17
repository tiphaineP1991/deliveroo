import React from "react";

const Item = props => {
  return (
    <div className="item">
      <div className="details">
        <h4>{props.title}</h4>
        <h5>{props.description}</h5>
        <div className="price">
          <p>{props.price} €</p>
          {props.popular === true ? (
            <span className="popular">✶ Populaire</span>
          ) : null}
        </div>
      </div>
      {props.picture === undefined ? null : (
        <img className="item-img" alt="item" src={props.picture}></img>
      )}
    </div>
  );
};

export default Item;
