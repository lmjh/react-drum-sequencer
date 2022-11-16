import React, { useContext, useState } from "react";
import { SettingsContext } from "../contexts";
import ActionButton from "./ActionButton";

/**
 * Sets global tempo setting from user input.
 */
const TempoControl = () => {
    const { tempo } = useContext(SettingsContext);

    const [displayTempo, setDisplayTempo] = useState(tempo.current);

    const increment = (step) => {
        tempo.current + step < 201
            ? (tempo.current += step)
            : (tempo.current = 200);
        setDisplayTempo(tempo.current);
    };

    const decrement = (step) => {
        tempo.current - step > 39
            ? (tempo.current -= step)
            : (tempo.current = 40);
        setDisplayTempo(tempo.current);
    };

    return (
        <div className="tempoControl">
            <div className="tempoDisplay">
                <div className="tempoDisplayInner">
                    {displayTempo}
                </div>
            </div>
            <ActionButton
                label="<<"
                actionFunction={() => decrement(10)}
                className="tempoButton"
                innerClassName={tempo.current > 40 ? "tempoButtonInner" : "tempoButtonInnerInactive"}
            />
            <ActionButton
                label="<"
                actionFunction={() => decrement(1)}
                className="tempoButton"
                innerClassName={tempo.current > 40 ? "tempoButtonInner" : "tempoButtonInnerInactive"}
            />
            <ActionButton
                label=">"
                actionFunction={() => increment(1)}
                className="tempoButton"
                innerClassName={tempo.current < 200 ? "tempoButtonInner" : "tempoButtonInnerInactive"}
            />
            <ActionButton
                label=">>"
                actionFunction={() => increment(10)}
                className="tempoButton"
                innerClassName={tempo.current < 200 ? "tempoButtonInner" : "tempoButtonInnerInactive"}
            />
        </div>
    );
};

export default TempoControl;
