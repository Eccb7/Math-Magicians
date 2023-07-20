import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calcData, buttonName);
    setCalcData(newData);
  };

  return (
    <>
      <div className="math">LETS DO SOME MATH</div>
      <div className="calculator-container">
        <div className="calculator">
          <input type="text" className="result-input w-100" value={calcData.next || calcData.total || ''} readOnly />
          <div className="keypad">
            <div className="row">
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('AC')}>
                  AC
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-orange w-100" onClick={() => handleButtonClick('+/-')}>
                  +/-
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-orange w-100" onClick={() => handleButtonClick('%')}>
                  %
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-orange w-100" onClick={() => handleButtonClick('÷')}>
                  /
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('7')}>
                  7
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('8')}>
                  8
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('9')}>
                  9
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-orange w-100" onClick={() => handleButtonClick('-')}>
                  -
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('4')}>
                  4
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('5')}>
                  5
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('6')}>
                  6
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-orange w-100" onClick={() => handleButtonClick('x')}>
                  x
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('1')}>
                  1
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('2')}>
                  2
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('3')}>
                  3
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-orange w-100" onClick={() => handleButtonClick('+')}>
                  +
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('0')}>
                  0
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-gray w-100" onClick={() => handleButtonClick('.')}>
                  .
                </button>
              </div>
              <div className="col">
                <button type="button" className="button-orange w-100" onClick={() => handleButtonClick('=')}>
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Calculator;
