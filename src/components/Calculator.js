import React from 'react';
import './Calculator.css';

const ClearButton = () => (
  <button type="button" className="button-gray w-100">
    AC
  </button>
);

const Calculator = () => (
  <div className="calculator-container">
    <div className="calculator">
      <input type="text" className="result-input w-100" />
      <div className="keypad">
        <div className="row">
          <div className="col">
            <ClearButton />
          </div>
          <div className="col">
            <button type="button" className="button-orange w-100">
              +/-
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-orange w-100">
              %
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-orange w-100">
              /
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="button-gray w-100">
              7
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-gray w-100">
              8
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-gray w-100">
              9
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-orange w-100">
              -
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="button-gray w-100">
              4
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-gray w-100">
              5
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-gray w-100">
              6
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-orange w-100">
              x
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="button-gray w-100">
              1
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-gray w-100">
              2
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-gray w-100">
              3
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-orange w-100">
              +
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="button-gray w-100">
              0
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-gray w-100">
              .
            </button>
          </div>
          <div className="col">
            <button type="button" className="button-orange w-100">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Calculator;
