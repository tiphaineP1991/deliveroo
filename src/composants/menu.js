import React from "react";
import Item from "../composants/item";
import Panier from "../composants/panier";

const Menu = props => {
  const products = props.products;
  const setProducts = props.setProducts;
  console.log(products);

  const addProduct = product => {
    const newProducts = [...products];
    let isFound = false;
    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === product.id) {
        newProducts[i].quantity = newProducts[i].quantity + 1;
        isFound = true;
        break;
      }
    }
    if (isFound === false) {
      product.quantity = 1;
      newProducts.push(product);
    }
    setProducts(newProducts);
    console.log(products);
  };

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total = total + products[i].price * products[i].quantity;
    }
    return total;
  };

  const result = calculateTotal() + 2.5;

  return (
    <div className="content">
      <div className="Menu">
        <div className="Category">
          {Object.keys(props.menu).map((category, index) => {
            return (
              <div key={index}>
                <div className="category-name">
                  <h3>{category}</h3>
                </div>
                <div className="meals">
                  {props.menu[category].map(meal => {
                    return (
                      <div
                        className="Item"
                        onClick={() => {
                          addProduct({
                            name: meal.title,
                            price: meal.price,
                            id: meal.id
                          });
                        }}
                      >
                        <Item key={meal.id} {...meal}></Item>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Panier">
        <button className="submit">Valider mon panier</button>
        {products.map((product, index) => {
          return (
            <Panier
              key={index}
              quantity={product.quantity}
              title={product.name}
              price={product.price}
            ></Panier>
          );
        })}
        <div className="border"></div>
        <div className="sous-total">
          <h4>Sous-total</h4>
          <div className="prix-panier">{calculateTotal()} €</div>
        </div>
        <div className="sous-total">
          <h4>Frais de livraison</h4>
          <div className="prix-panier">2.5€</div>
        </div>
        <div className="border"></div>
        <div className="sous-total">
          <h3>TOTAL</h3>
          <div className="prix-total">{result} €</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
