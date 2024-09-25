import { useState } from 'react'
import './App.css'

function App() {
  const [edit, setEdit] = useState("");

  return (
    <>
      <textarea id="editor" placeholder="Enter text here." 
      onChange={e => setEdit(e.target.value)}>

      </textarea>
      <div id="preview">
        {edit}
      </div>
    </>
  )
}

export default App
