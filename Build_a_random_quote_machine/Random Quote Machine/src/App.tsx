import { useState } from 'react'
import quotes from './assets/quotes.json'
import './App.css'

interface Quote {
  quote: string,
  author: string
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  return (
    <>
      <div id="quote-box">
        <div id='text'>
          {quote.quote}
        </div>
        <div id="author">
          {quote.author}
        </div>
        <button id='new-quote' onClick={}>New Quote</button>
        <a type="button" id='tweet-quote' href="https://twitter.com/intent/tweet">Tweet Quote</a>
      </div>
    </>
  )
}

export default App
