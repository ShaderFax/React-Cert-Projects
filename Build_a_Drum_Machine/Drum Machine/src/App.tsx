import { useState } from 'react'
import './App.css'
import Sound from './assets/clip.mp3';

function App(){

  return (
    <>
      <div id="drum-machine">
        <div id="display">
          
        </div>
        <button className="drum-pad" id="drum-1"><audio src={Sound} className="clip" id='Q' />Q</button>
        <button className="drum-pad" id="drum-2"><audio src={Sound} className="clip" id='W' />W</button>
        <button className="drum-pad" id="drum-3"><audio src={Sound} className="clip" id='E' />E</button>
        <button className="drum-pad" id="drum-4"><audio src={Sound} className="clip" id='A' />A</button>
        <button className="drum-pad" id="drum-5"><audio src={Sound} className="clip" id='S' />S</button>
        <button className="drum-pad" id="drum-6"><audio src={Sound} className="clip" id='D' />D</button>
        <button className="drum-pad" id="drum-7"><audio src={Sound} className="clip" id='Z' />Z</button>
        <button className="drum-pad" id="drum-8"><audio src={Sound} className="clip" id='X' />X</button>
        <button className="drum-pad" id="drum-9"><audio src={Sound} className="clip" id='C' />C</button>
      </div>
    </>
  )
}

export default App
