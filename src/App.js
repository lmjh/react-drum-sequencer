import { ControlPanel, TrackPanel } from './components';
import { SettingsContextProvider, BeatContextProvider } from './contexts';

function App() {
  return (
    <SettingsContextProvider>  
      <div>
        <h1>React Drum Sequencer</h1>
        <ControlPanel />
        <BeatContextProvider>
          <TrackPanel />
        </BeatContextProvider>
      </div>
    </SettingsContextProvider>
  );
}

export default App;
