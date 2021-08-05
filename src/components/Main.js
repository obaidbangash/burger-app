import React from "react";
import Ings from "./Ing";
const Main = ({ ing }) => {
    return (
        <div className='burger-wrapper'>
            <div className='bg-top'>
                <div className='bg-top-inner1'></div>
                <div className='bg-top-inner2'></div>
            </div>
            {ing.map((item) => (
                <Ings type={item.type} />
            ))}
            <div className='bg-bottom'></div>
        </div>
    );
};

export default Main;
