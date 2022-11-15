import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Button calls the toggleFunction passed to it on click.
 * If offLabel is supplied, label is based on the passed property boolean.
 */
const ToggleButton = ({
    property,
    toggleFunction,
    onIcon,
    offIcon,
    onLabel,
    offLabel,
    className,
    innerClassName,
}) => {
    return (
        <button
            aria-label={property ? onLabel : offLabel}
            onClick={toggleFunction}
            className={className}
        >
            <div className={innerClassName}>
                <FontAwesomeIcon
                    icon={"fa-solid " + (property ? onIcon : offIcon)}
                />
            </div>
        </button>
    );
};

ToggleButton.propTypes = {
    property: PropTypes.bool.isRequired,
    toggleFunction: PropTypes.func.isRequired,
    onIcon: PropTypes.string.isRequired,
    offIcon: PropTypes.string.isRequired,
    onLabel: PropTypes.string.isRequired,
    offLabel: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    innerClassName: PropTypes.string.isRequired,
};

export default ToggleButton;
