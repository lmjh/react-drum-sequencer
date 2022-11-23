import React from "react";

import logo from "../logo.svg";

function Header() {
    return (
        <header className="headerContainer">
            <h1 className="title">RDS v1.0</h1>
            <img src={logo} className="logo"/>
        </header>
    );
}

export default Header;
