import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Button that calls the actionFunction passed to it on click.
 */
const ActionButton = ({
    actionFunction,
    icon,
    label,
    className,
    innerClassName,
}) => {
    return (
        <button
            onClick={actionFunction}
            className={className}
            aria-label={label}
        >
            <div className={innerClassName}>
                {icon ? <FontAwesomeIcon icon={"fa-solid " + icon}/> : label}
            </div>
        </button>
    );
};

ActionButton.propTypes = {
    actionFunction: PropTypes.func.isRequired,
    icon: PropTypes.string,
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    innerClassName: PropTypes.string.isRequired,
};

export default ActionButton;
