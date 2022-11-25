import React, { useMemo } from "react";
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
    const buttonLabel = useMemo(
        () => (icon ? <FontAwesomeIcon icon={"fa-solid " + icon} /> : label),
        [icon, label]
    );
    return (
        <button
            onClick={actionFunction}
            className={className}
            aria-label={label}
        >
            <div className={innerClassName}>{buttonLabel}</div>
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

export default React.memo(ActionButton);
