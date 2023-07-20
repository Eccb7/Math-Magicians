import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/quote';
import Home from './components/Home';

const Navigation = () => (
  <nav className="navbar">
    <div className="navbar-logo">Math-Magicians</div>
    <ul className="navbar-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

const App = () => (
  <Router>
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<QuoteDisplay />} />
      </Routes>
    </div>
  </Router>
);

export default App;
