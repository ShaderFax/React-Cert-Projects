import { useState } from 'react'
import './App.css'

function App(){

  return (
    <>
      <div id="drum-machine">
        <div id="display">

        </div>
        <button className="drum-pad" id="drum-1"><audio src="./assets/clip.mp3" className="clip" id='Q' />Q</button>
        <button className="drum-pad" id="drum-2"><audio src="./assets/clip.mp3" className="clip" id='W' />W</button>
        <button className="drum-pad" id="drum-3"><audio src="./assets/clip.mp3" className="clip" id='E' />E</button>
        <button className="drum-pad" id="drum-4"><audio src="./assets/clip.mp3" className="clip" id='A' />A</button>
        <button className="drum-pad" id="drum-5"><audio src="./assets/clip.mp3" className="clip" id='S' />S</button>
        <button className="drum-pad" id="drum-6"><audio src="./assets/clip.mp3" className="clip" id='D' />D</button>
        <button className="drum-pad" id="drum-7"><audio src="./assets/clip.mp3" className="clip" id='Z' />Z</button>
        <button className="drum-pad" id="drum-8"><audio src="./assets/clip.mp3" className="clip" id='X' />X</button>
        <button className="drum-pad" id="drum-9"><audio src="./assets/clip.mp3" className="clip" id='C' />C</button>
      </div>
    </>
  )
}

export default App
