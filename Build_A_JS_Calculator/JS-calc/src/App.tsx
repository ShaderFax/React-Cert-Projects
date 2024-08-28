import { useState } from "react";
import './App.css';

function App() {
  const buttonPress = (symbol: string) => {
    console.log(symbol)
  }

  return (
    <>
    <h1>Calculator App</h1>
      <div className="container">
        <div id="calculator">
          <div id="display" style={{textAlign: "right"}}>
            <div id="answer"></div>
            <div id="expression"></div>
          </div>
          <button onClick={() => buttonPress("clear")} className="grey red-text" id="clear">C</button>
          <button onClick={() => buttonPress("brackets")} className=" grey green-text">()</button>
          <button onClick={() => buttonPress("percentage")} className="grey green-text" id="pecentage">%</button>
          <button onClick={() => buttonPress("/")} className="grey green-text" id="divide">/</button>
          <button onClick={() => buttonPress("7")} className="grey white-text" id="seven">7</button>
          <button onClick={() => buttonPress("8")} className="grey white-text" id="eight">8</button>
          <button onClick={() => buttonPress("9")} className="grey white-text" id="nine">9</button>
          <button onClick={() => buttonPress("*")} className="grey green-text" id="multiply">*</button>
          <button onClick={() => buttonPress("4")} className="grey white-text" id="four">4</button>
          <button onClick={() => buttonPress("5")} className="grey white-text" id="five">5</button>
          <button onClick={() => buttonPress("6")} className="grey white-text" id="six">6</button>
          <button onClick={() => buttonPress("-")} className="grey green-text" id="subtract">-</button>
          <button onClick={() => buttonPress("1")} className="grey white-text" id="one">1</button>
          <button onClick={() => buttonPress("2")} className="grey white-text" id="two">2</button>
          <button onClick={() => buttonPress("3")} className="grey white-text" id="three">3</button>
          <button onClick={() => buttonPress("+")} className="grey green-text" id="add">+</button>
          <button onClick={() => buttonPress("negative")} className="grey white-text" id="negative">+/-</button>
          <button onClick={() => buttonPress("0")} className="grey white-text" id="zero">0</button>
          <button onClick={() => buttonPress(".")} className="grey white-text" id="decimal">.</button>
          <button onClick={() => buttonPress("=")} className="green white-text" id="equals">=</button>
        </div>
      </div>
    </>
  )
}

export default App;
