import { useState } from "react"
import './App.css'

function App() {

  const handleTimer = () => {

  }

  const handleAlarm = () => {
    
  }

  return (
    <>
      <textarea id="editor"></textarea>
      <div id="preview"></div>
      <div id="break-label">Break Length</div>
      <input type="button" id="break-increment"></input>
      <input type="button" id="break-decrement"></input>
      <div id="session-label">Session Length</div>
      <input type="button" id="session-increment"></input>
      <input type="button" id="session-decrement"></input>
      <div id="timer-label">Session</div>
      <div id="session-length">25</div>
      <div id="break-length">5</div>
      <div id="time-left"></div>
      <input type="button" id="start_stop"></input>
      <input type="button" id="reset"></input>
    </>
  )
}

export default App
