import React, { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";
import Header from "./composants/header";
import Restaurant from "./composants/restaurant";
import Menu from "./composants/menu";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState({});
  const [menu, setMenu] = useState({});

  const fetchData = async () => {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setRestaurants(response.data.restaurant);
    setMenu(response.data.menu);
    setIsLoading(false);
  };

  useEffect(() => fetchData(), []);

  return (
    <div className="App">
      <Header></Header>
      <Restaurant
        title={restaurants.name}
        description={restaurants.description}
        photo={restaurants.picture}
      ></Restaurant>
      <div>
        <div>
          {isLoading === true ? <p>Loading ...</p> : <Menu menu={menu}></Menu>}
        </div>
      </div>
    </div>
  );
}

export default App;
