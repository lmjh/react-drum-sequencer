import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HelpButton = () => {
    return (
        <button className="helpButton" aria-label="Open help modal">
            <div className="helpButtonInner">
                <FontAwesomeIcon icon="fa-regular fa-circle-question" />
            </div>
        </button>
    );
};

export default HelpButton;
