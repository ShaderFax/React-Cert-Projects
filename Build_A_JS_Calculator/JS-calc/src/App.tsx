import { useState } from "react";
import './App.css';

function App() {
  const buttonPress = (symbol: string) => {
    console.log(symbol)
  }

  return (
    <>
      <div className="container">
        <h1>Calculator App</h1>
        <div id="calculator">
          <div id="display" style={{textAlign: "right"}}>
            <div id="answer"></div>
            <div id="expression"></div>
          </div>
          <button onClick={() => buttonPress("clear")} className="light-grey" id="clear">C</button>
          <button onClick={() => buttonPress("negative")} className="light-grey" id="negative">+/-</button>
          <button onClick={() => buttonPress("percentage")} className="light-grey" id="pecentage">%</button>
          <button onClick={() => buttonPress("divide")} className="light-grey" id="divide">/</button>
          <button onClick={() => buttonPress("seven")} className="light-grey" id="seven">7</button>
          <button onClick={() => buttonPress("eight")} className="light-grey" id="eight">8</button>
          <button onClick={() => buttonPress("nine")} className="light-grey" id="nine">9</button>
          <button onClick={() => buttonPress("multiply")} className="light-grey" id="multiply">*</button>
          <button onClick={() => buttonPress("four")} className="light-grey" id="four">4</button>
          <button onClick={() => buttonPress("five")} className="light-grey" id="five">5</button>
          <button onClick={() => buttonPress("six")} className="light-grey" id="six">6</button>
          <button onClick={() => buttonPress("subtract")} className="light-grey" id="subtract">-</button>
          <button onClick={() => buttonPress("one")} className="light-grey" id="one">1</button>
          <button onClick={() => buttonPress("two")} className="light-grey" id="two">2</button>
          <button onClick={() => buttonPress("three")} className="light-grey" id="three">3</button>
          <button onClick={() => buttonPress("add")} className="light-grey" id="add">+</button>
          <button onClick={() => buttonPress("zero")} className="light-grey" id="zero">0</button>
          <button onClick={() => buttonPress("decimal")} className="light-grey" id="decimal">.</button>
          <button onClick={() => buttonPress("equals")} className="light-grey" id="equals">=</button>
        </div>
      </div>
    </>
  )
}

export default App;
