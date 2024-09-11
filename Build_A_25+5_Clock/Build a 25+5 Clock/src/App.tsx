import { useState } from "react"
import './App.css'
import './Alarm'
import './Timer'

function App() {
  const [state, setCount] = { useState };

  return (
    <>
      <textarea id="editor"></textarea>
      <div id="preview"></div>
      <div id="session-length">25</div>
      <div id="break-length">5</div>
      <div id="break-label">Break Length</div>
      <button type="button" id="break-increment">+</button>
      <button type="button" id="break-decrement">-</button>
      <div id="session-label">Session Length</div>
      <button type="button" id="session-increment">+</button>
      <button type="button" id="session-decrement">-</button>
      <div id="timer-label">Session</div>
      
      <div id="time-left"></div>
      <button type="button" id="start_stop">Start</button>
      <button type="button" id="reset">Reset</button>
    </>
  )
}

export default App
