import React from "react";
import Item from "../composants/item";

const Menu = props => {
  return (
    <div className="Menu">
      <div className="Category">
        {Object.keys(props.menu).map((category, index) => {
          return (
            <div key={index}>
              <h3>{category}</h3>
              <div className="meals">
                {props.menu[category].map(meal => {
                  return <Item key={meal.id} {...meal}></Item>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
