import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import InvestmentForm from './components/Form/InvestmentForm';
import ResultTable from './components/Table/ResultTable';

const START_DATA = [
  {
    year: 1,
    totalSavings: 10000,
    interestForYear: 500,
    totalInterest: 500,
    investedCapital: 11200,
  },
];

function App() {
  const [isFormReset, setIsFormReset] = useState(false);
  const [investmentData, setInvestmentData] = useState(START_DATA);

  const resetFormHandler = () => {
    setIsFormReset(true);
  };

  const saveHandler = (yearlyData) => {
    setIsFormReset(false);
    const data = {
      ...yearlyData,
      id: Math.random().toString(),
    };
    setInvestmentData(data);
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentForm resetForm={resetFormHandler} onSaveInvestmentData={saveHandler}/>
      {isFormReset ? (
        <p>No investment calculated yet.</p>
      ) : (
        <ResultTable rows={investmentData}/>
      )}
    </div>
  );
}

export default App;
