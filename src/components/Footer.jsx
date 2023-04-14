import React, { useContext } from "react";
import { SettingsContext } from "../contexts";

import {
    ToggleButton,
    HelpButton,
} from "./";

function Footer() {
    const { darkMode, toggleDarkMode } = useContext(SettingsContext);

    return (
        <footer>
            <div className="footerContainer">
                <div className="footerTextContainer">
                    <div>Ⓒ {new Date().getFullYear()} Liam Hemming</div>
                    <div className="footerSpacer"></div>
                    <div>
                        Find me on github:{" "}
                        <a
                            href="https://github.com/lmjh/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            lmjh
                        </a>
                    </div>
                </div>
                <div className="footerControls">
                    <ToggleButton
                        property={darkMode}
                        toggleFunction={toggleDarkMode}
                        onIcon="fa-sun"
                        offIcon="fa-moon"
                        onLabel="Switch to light mode"
                        offLabel="Switch to dark mode"
                        className="footerButton"
                        innerClassName="footerButtonInner"
                    />
                    <HelpButton />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
