import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import Investments from './components/Main/Investments';

function App() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <Investments />
    </div>
  );
}

export default App;
