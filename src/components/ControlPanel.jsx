import React, { useContext } from 'react';
import { SettingsContext } from '../contexts';

import { ToggleButton, VolumeControl, Visualiser, TempoControl } from './';

const ControlPanel = () => {
  const {
    isPlaying,
    togglePlayPause,
    isPaused,
    stopPlaying,
    isMuted,
    toggleMuted 
  } = useContext(SettingsContext);

  return (
    <div>
      <h2>ControlPanel</h2>
      <ToggleButton 
        property={isPlaying && !isPaused}
        toggleFunction={togglePlayPause}
        onLabel="Pause"
        offLabel="Play"
      />
      <ToggleButton 
        property={isPlaying}
        toggleFunction={stopPlaying}
        onLabel="Stop"
      />
      <ToggleButton 
        property={isMuted}
        toggleFunction={toggleMuted}
        onLabel="Unmute"
        offLabel="Mute"
      />
      <VolumeControl />
      <Visualiser />
      <TempoControl />
    </div>
  )
}

export default ControlPanel;