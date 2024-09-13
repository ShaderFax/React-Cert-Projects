import { useState } from "react"
import './App.css'

const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [displayState, setDisplayState] = useState<DisplayState>("session");


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
