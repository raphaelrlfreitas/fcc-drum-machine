import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flex-container flex-content-center">
        <div id="drum-machine" className="machine-container">
          <div className="machine-header">My Drum Machine</div>
          <div className="controls-container">
            <div className="pads-wrapper grid-container grid-3-col">
              <div className="drum-pad">Q</div>
              <div className="drum-pad">W</div>
              <div className="drum-pad">E</div>
              <div className="drum-pad">A</div>
              <div className="drum-pad">S</div>
              <div className="drum-pad">D</div>
              <div className="drum-pad">Z</div>
              <div className="drum-pad">X</div>
              <div className="drum-pad">C</div>
            </div>
            <div className="display-wrapper">
              <div className="display-title">You are playing</div>
              <div className="display">Test audio</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
