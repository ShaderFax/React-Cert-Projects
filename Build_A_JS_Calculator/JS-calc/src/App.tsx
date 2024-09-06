import { useState } from "react";
import './App.css';

function App() {
  const [answer, setAnswer] = useState("0");
  const [expression, setExpression] = useState("");
  const et = expression.trim();
  
  const isOperator = (symbol: string) => {
    return /[*/+-]/g.test(symbol);
  };

  const buttonPress = (symbol: string) => {
    if (symbol === "clear") {
      setAnswer("");
      setExpression("0");
      } else if (symbol === "negative") {
        if(answer === "") return;
        setAnswer(answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer);
      } else if (symbol === "percentage") {
        if(answer === "") return;
        setAnswer((parseFloat(answer) / 100).toString());
      } else if (isOperator(symbol)){
        setExpression(et + " " + symbol + " ");
      } else if(symbol === "=") {
        calculate();
      } else if(symbol === "0") {
        if(expression.charAt(0) !== "0") {
          setExpression(expression + symbol)
        }
      } else if(symbol === ".") {
        const lastNumber = expression.split(/[*/+-]/g).pop();
        if(lastNumber?.includes(".")) return;
        setExpression(expression + symbol);
      } else {
        if(expression.charAt(0) === "0") {
          setExpression(expression.slice(1) + symbol);
        } else {
          setExpression(expression + symbol);
        }
      }
    }

    const calculate = () => {
      if(isOperator(et.charAt(et.length - 1))) return;

      const parts = et.split(" "); 
      const newParts = [];

      for (let i = parts.length; i >= 0; i--) {
        if(["*", "/", "+"].includes(parts[i]) && isOperator(parts[i-1])) {
          newParts.unshift(parts[i]);
          let j = 0;
          let k = i - 1;
          while(isOperator(parts[k])) {
            k--;
            j++;
          }
          i -= j;
        } else {
          newParts.unshift(parts[i]);
        }
      }
      const newExpression = newParts.join(" "); 

      if(isOperator(newExpression.charAt(0))) {
        setAnswer(eval(answer + newExpression) as string);
      } else {
        setAnswer(eval(newExpression) as string);
      }
      setExpression("");
    }

  return (
    <>
    <h1>Calculator App</h1>
      <div className="container">
        <div id="calculator">
          <div id="display" style={{ textAlign: "right" }}>
            <div id="answer">{answer}</div>
            <div id="expression">{expression}</div>
            <hr></hr>
          </div>
          <button onClick={() => buttonPress("clear")} className="grey red-text" id="clear">C</button>
          <button onClick={() => buttonPress("brackets")} className="grey green-text" id="brackets">()</button>
          <button onClick={() => buttonPress("percentage")} className="grey green-text" id="percentage">%</button>
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
