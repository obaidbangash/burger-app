import React from "react";
import "../App.css";
const Ing = ({ type }) => {
  let ing;
  switch (type) {
    case "salad":
      ing = <div className='salad'></div>;
      break;
    case "meat":
      ing = <div className='meat'></div>;
      break;
    case "cheese":
      ing = <div className='cheese'></div>;
      break;
    case "bacon":
      ing = <div className='bacon'></div>;
  }
  return ing;
};

export default Ing;
