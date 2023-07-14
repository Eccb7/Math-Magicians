import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/quote';

const App = () => (
  <div className="app-container">
    <QuoteDisplay />
    <Calculator />
  </div>
);

export default App;
