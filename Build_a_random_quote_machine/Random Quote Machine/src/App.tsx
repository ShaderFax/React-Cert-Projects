import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getQuote = () => {

  }

  const displayQuote = () => {

  }

  const getAuthor = () => {

  }

  const displayAuthor = () => {

  }

  return (
    <>
      <div id="quote-box">
        <div id='text'>
          Test
        </div>
        <div id="author">
          Test
        </div>
        <button id='new-quote'>New Quote</button>
        <a type="button" id='tweet-quote' href="https://twitter.com/intent/tweet">Tweet Quote</a>
      </div>
    </>
  )
}

export default App
