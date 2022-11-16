import React from "react";

import { ControlPanel, TrackPanel } from "./components";
import { SettingsContextProvider, BeatContextProvider } from "./contexts";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPlay,
    faPause,
    faStop,
    faVolumeXmark,
    faVolumeHigh,
    faBan,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause, faStop, faVolumeXmark, faVolumeHigh, faBan);

function App() {
    return (
        <SettingsContextProvider>
            <main className="appMainContainer">
                <h1 className="title">React Drum Sequencer</h1>
                <ControlPanel />
                <BeatContextProvider>
                    <TrackPanel />
                </BeatContextProvider>
            </main>
        </SettingsContextProvider>
    );
}

export default App;
