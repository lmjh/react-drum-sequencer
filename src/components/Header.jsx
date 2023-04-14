import React, { useContext, useMemo } from "react";
import { SettingsContext } from "../contexts";

import { logoDark, logoLight } from "../images/";

function Header() {
    const { darkMode } = useContext(SettingsContext);

    const logo = useMemo(() => (darkMode ? logoLight : logoDark), [darkMode]);

    return (
        <header className="headerContainer">
            <h1 className="title">RDS v1.0</h1>
            <img src={logo} className="logo" />
        </header>
    );
}

export default Header;
