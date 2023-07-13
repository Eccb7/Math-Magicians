import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('0');

  const handleClick = (value) => {
    setResult((prevResult) => {
      if (prevResult === '0') {
        return value;
      }
      return prevResult + value;
    });
  };

  const handleCalculate = () => {
    try {
    //   eslint-disable-next-line
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setResult('0');
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input type="text" value={result} readOnly className="result-input w-100" />
        <div className="keypad">
          <div className="row">
            <div className="col">
              <button type="button" onClick={handleClear} className="button-gray w-100">AC</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('+/-')} className="button-orange w-100">+/-</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('%')} className="button-orange w-100">%</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('/')} className="button-orange w-100">/</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" onClick={() => handleClick('7')} className="button-gray w-100">7</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('8')} className="button-gray w-100">8</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('9')} className="button-gray w-100">9</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('-')} className="button-orange w-100">-</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" onClick={() => handleClick('4')} className="button-gray w-100">4</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('5')} className="button-gray w-100">5</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('6')} className="button-gray w-100">6</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('*')} className="button-orange w-100">x</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" onClick={() => handleClick('1')} className="button-gray w-100">1</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('2')} className="button-gray w-100">2</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('3')} className="button-gray w-100">3</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('+')} className="button-orange w-100">+</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" onClick={() => handleClick('0')} className="button-gray w-100">0</button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick('.')} className="button-gray w-100">.</button>
            </div>
            <div className="col">
              <button type="button" onClick={handleCalculate} className="button-orange w-100">=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
