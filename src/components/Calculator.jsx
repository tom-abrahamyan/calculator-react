import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  const del = () => {
    setInput(prevState => prevState.slice(0,-1))
  }

  return (
    <div className="calculator-container">
      <input type="text" value={input} disabled className="calculator-input" />
      <br />
      <br />
      <div className="buttons-container">
        <button className="calculator-button" onClick={() => handleClick("1")}>1</button>
        <button className="calculator-button" onClick={() => handleClick("2")}>2</button>
        <button className="calculator-button" onClick={() => handleClick("3")}>3</button>
        <button className="calculator-button operator-button" onClick={() => handleClick("+")}>+</button>
        <br />
        <button className="calculator-button" onClick={() => handleClick("4")}>4</button>
        <button className="calculator-button" onClick={() => handleClick("5")}>5</button>
        <button className="calculator-button" onClick={() => handleClick("6")}>6</button>
        <button className="calculator-button operator-button" onClick={() => handleClick("-")}>-</button>
        <br />
        <button className="calculator-button" onClick={() => handleClick("7")}>7</button>
        <button className="calculator-button" onClick={() => handleClick("8")}>8</button>
        <button className="calculator-button" onClick={() => handleClick("9")}>9</button>
        <button className="calculator-button operator-button" onClick={() => handleClick("*")}>x</button>
        <br />
        <button className="calculator-button" onClick={clear}>C</button>
        <button className="calculator-button" onClick={() => handleClick("0")}>0</button>
        <button className="calculator-button" onClick={() => handleClick(".")}>.</button>
        <button className="calculator-button operator-button" onClick={() => handleClick("/")}>÷</button>
        <br />
        <br />
        <button className="calculator-button equal-button" onClick={calculate}>=</button>
        <button className="calculator-button" onClick={del}>Del</button>
      </div>
    </div>
  );
};

export default Calculator;
