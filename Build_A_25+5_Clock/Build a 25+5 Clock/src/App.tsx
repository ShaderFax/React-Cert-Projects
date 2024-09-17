import { useState } from "react"
import './App.css'
import { DisplayState } from "./helper";
import TimeSetter from "./TimeSetter";

const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [displayState, setDisplayState] = useState<DisplayState>({
    time: sessionTime,
    timeType: "Session",
    timerRunning: false
  });


  return (
    <>
      <textarea id="editor"></textarea>
      <div id="preview">
        <div id="session-length">25</div>
        <div id="break-length">5</div>
        <div id="button-container">
          <div id="break-label">Break Length
            <button type="button" id="break-increment">+</button>
            <button type="button" id="break-decrement">-</button>
          </div>
          <TimeSetter />
          <div id="session-label">Session Length
            <button type="button" id="session-increment">+</button>
            <button type="button" id="session-decrement">-</button>
          </div>
          <TimeSetter />
        </div>
        <div id="timer-label">Session
          <div id="time-left"></div>
          <button type="button" id="start_stop">Start</button>
          <button type="button" id="reset">Reset</button>
        </div>
        <Display />
        <audio id="beep" src={AlarmSound}></audio>
      </div>
    </>
  )
}

export default App
