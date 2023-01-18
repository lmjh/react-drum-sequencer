import React from "react";

import { ControlPanel, Header, HelpButton, SequencePlayer, Footer } from "./components";
import { SettingsContextProvider } from "./contexts";

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
                <Header />
                <ControlPanel />
                <SequencePlayer />
                <HelpButton />
            </main>
            <Footer />
        </SettingsContextProvider>
    );
}

export default App;
