import React from "react";

import { BeatBar, Track } from "./";
import samples from "../audio";

const TrackPanel = () => {
    return (
        <div>
            <h2>TrackPanel</h2>
            <BeatBar />
            {samples.map(sample => <Track key={sample.name} name={sample.name} sample={sample.sample} />)}
        </div>
    );
};

export default TrackPanel;
