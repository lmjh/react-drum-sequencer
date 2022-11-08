import React from "react";
import PropTypes from "prop-types";

/**
 * Button calls the toggleFunction passed to it on click.
 * If offLabel is supplied, label is based on the passed property boolean.
 */
const ToggleButton = ({ property, toggleFunction, onLabel, offLabel }) => {
    return (
        <div>
            <button onClick={toggleFunction}>
                {offLabel ? (property ? onLabel : offLabel) : onLabel}
            </button>
        </div>
    );
};

ToggleButton.propTypes = {
    property: PropTypes.bool.isRequired,
    toggleFunction: PropTypes.func.isRequired,
    onLabel: PropTypes.string.isRequired,
    offLabel: PropTypes.string,
};

export default ToggleButton;
