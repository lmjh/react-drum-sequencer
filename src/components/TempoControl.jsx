import React, { useContext, useState, useCallback, useMemo } from "react";
import { SettingsContext } from "../contexts";
import ActionButton from "./ActionButton";

/**
 * Sets global tempo setting from user input.
 */
const TempoControl = () => {
    const { tempo } = useContext(SettingsContext);

    const [displayTempo, setDisplayTempo] = useState(tempo.current);

    const increment = useCallback(
        (step) => {
            tempo.current + step < 201
                ? (tempo.current += step)
                : (tempo.current = 200);
            setDisplayTempo(tempo.current);
        },
        [tempo]
    );
    const decrement = useCallback(
        (step) => {
            tempo.current - step > 39
                ? (tempo.current -= step)
                : (tempo.current = 40);
            setDisplayTempo(tempo.current);
        },
        [tempo]
    );

    const incrementClass = useMemo(
        () =>
            displayTempo < 200
                ? "tempoButtonInner"
                : "tempoButtonInnerInactive",
        [displayTempo]
    );

    const decrementClass = useMemo(
        () =>
            displayTempo > 40 ? "tempoButtonInner" : "tempoButtonInnerInactive",
        [displayTempo]
    );

    return (
        <div className="tempoControl">
            <div className="tempoDisplay">
                <div className="tempoDisplayInner">{displayTempo}</div>
            </div>
            <ActionButton
                label="<<"
                actionFunction={useCallback(() => decrement(10), [])}
                className="tempoButton"
                innerClassName={decrementClass}
            />
            <ActionButton
                label="<"
                actionFunction={useCallback(() => decrement(1), [])}
                className="tempoButton"
                innerClassName={decrementClass}
            />
            <ActionButton
                label=">"
                actionFunction={useCallback(() => increment(1), [])}
                className="tempoButton"
                innerClassName={incrementClass}
            />
            <ActionButton
                label=">>"
                actionFunction={useCallback(() => increment(10), [])}
                className="tempoButton"
                innerClassName={incrementClass}
            />
        </div>
    );
};

export default React.memo(TempoControl);
