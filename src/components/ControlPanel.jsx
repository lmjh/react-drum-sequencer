import React from 'react';

import { ToggleButton, VolumeControl, Visualiser, TempoControl } from './';

const ControlPanel = () => {
  return (
    <div>
        <h2>ControlPanel</h2>
        <ToggleButton />
        <ToggleButton />
        <ToggleButton />
        <VolumeControl />
        <Visualiser />
        <TempoControl />
    </div>
  )
}

export default ControlPanel;