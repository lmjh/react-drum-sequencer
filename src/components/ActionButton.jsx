import React from "react";
import PropTypes from "prop-types";

/**
 * Button that calls the actionFunction passed to it on click.
 */
const ActionButton = ({ actionFunction, label }) => {
    return (
        <button onClick={actionFunction} className="actionButton">
            {label}
        </button>
    );
};

ActionButton.propTypes = {
    actionFunction: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default ActionButton;
