import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Count from "./components/Count";
import Print from "./components/newapp/Print"
const fixedPrice = {
  salad: 2,
  meat: 10,
  cheese: 4,
  bacon: 3
}


function App() {
  const [ing, setIng] = useState([]);
  const [price, setPrice] = useState(0);

  const increment = (type, action) => {
    const data = [...ing];
    if (action == "more") {
      data.push({ name: type, type });
      setPrice(price + fixedPrice[type])
    }

    else {
      const index = ing.findIndex((item) => item.type === type)

      if (index !== -1) {
        data.splice(index, 1);
        setPrice(price - fixedPrice[type])

      }


    }
    return setIng(data);
  }

  return (
    <div className='main'>
      <Header />
      <Main ing={ing} />
      <Count price={price} increment={increment} ing={ing} />
      <Print ing={ing} price={price} fixedPrice={fixedPrice} />
    </div>
  );
}

export default App;
