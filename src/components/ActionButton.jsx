import React from "react";
import PropTypes from "prop-types";

/**
 * Button that calls the actionFunction passed to it on click.
 */
const ActionButton = ({ actionFunction, label, className, innerClassName }) => {
    return (
        <button onClick={actionFunction} className={className}>
            <div className={innerClassName}>{label}</div>
        </button>
    );
};

ActionButton.propTypes = {
    actionFunction: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    innerClassName: PropTypes.string.isRequired,
};

export default ActionButton;
