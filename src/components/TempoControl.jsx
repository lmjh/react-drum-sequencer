import React, { useContext, useState } from "react";
import { SettingsContext } from "../contexts";

/**
 * Sets global tempo setting from user input.
 */
const TempoControl = () => {
    const { tempo } = useContext(SettingsContext);

    const [displayTempo, setDisplayTempo] = useState(tempo.current);

    const increment = (step) => {
        tempo.current + step < 301
            ? (tempo.current += step)
            : (tempo.current = 300);
        setDisplayTempo(tempo.current);
    };

    const decrement = (step) => {
        tempo.current - step > 39
            ? (tempo.current -= step)
            : (tempo.current = 40);
        setDisplayTempo(tempo.current);
    };

    return (
        <div>
            <div>Tempo</div>
            <div>
                <button onClick={() => decrement(10)}>--</button>
                <button onClick={() => decrement(1)}>-</button>
                {displayTempo}
                <button onClick={() => increment(1)}>+</button>
                <button onClick={() => increment(10)}>++</button>
            </div>
        </div>
    );
};

export default TempoControl;
