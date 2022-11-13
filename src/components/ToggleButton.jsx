import React from "react";
import PropTypes from "prop-types";

/**
 * Button calls the toggleFunction passed to it on click.
 * If offLabel is supplied, label is based on the passed property boolean.
 */
const ToggleButton = ({ property, toggleFunction, onLabel, offLabel }) => {
    return (
        <button onClick={toggleFunction} className="toggleButton">
            {offLabel ? (property ? onLabel : offLabel) : onLabel}
        </button>
    );
};

ToggleButton.propTypes = {
    property: PropTypes.bool.isRequired,
    toggleFunction: PropTypes.func.isRequired,
    onLabel: PropTypes.string.isRequired,
    offLabel: PropTypes.string,
};

export default ToggleButton;
