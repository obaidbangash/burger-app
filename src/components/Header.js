import React from 'react';
import logo from "../assets/burger-logo.png";
const Header = () => {
    const list = ['Burger Builder', 'Log In']
    return (
        <header>
            <div className="container-fluid">
                <div className="header-wrapper d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <nav>
                        <ul className="d-flex">
                            {list.map((val, i) => <li key={i}> <a href="#"> {val} </a> </li>)}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
