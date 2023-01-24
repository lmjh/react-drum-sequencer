import React from "react";

import {
    ControlPanel,
    Header,
    HelpButton,
    SequencePlayer,
    Footer,
} from "./components";
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
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

library.add(
    faPlay,
    faPause,
    faStop,
    faVolumeXmark,
    faVolumeHigh,
    faBan,
    faCircleQuestion
);

function App() {
    return (
        <SettingsContextProvider>
            <main className="appMainContainer">
                <Header />
                <ControlPanel />
                <SequencePlayer />
            </main>
            <HelpButton />
            <Footer />
        </SettingsContextProvider>
    );
}

export default App;
