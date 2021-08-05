import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Count from "./components/Count";
const PRICES = {
  salad: 2,
  meat: 5,
  bacon: 3,
  cheese: 4,
};

// {name:"Salad",type:"salad"},
// {name:"Salad",type:"salad"},
// {name:"Meat",type:"meat"}
function App() {
  const [ing, setIng] = useState([]);
  const [price, setPrice] = useState(0);

  const adding = (type, action) => {
    const data = [...ing];
    if (action === "more") {
      data.push({ name: type, type });
      setPrice(price + PRICES[type]);
    } else if (action === "less") {
      const index = ing.findIndex((item) => item.type === type);
      data.splice(index, 1)
      setPrice(price - PRICES[type]);
    }
    return setIng(data);
  };

  return (
    <div className='main'>
      <Header />
      <Main ing={ing} />
      <Count price={price} adding={adding} />
    </div>
  );
}

export default App;
