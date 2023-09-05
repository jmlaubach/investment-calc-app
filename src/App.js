import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import InvestmentForm from './components/Form/InvestmentForm';
import ResultTable from './components/Table/ResultTable';

function App(props) {
  const [isFormReset, setIsFormReset] = useState(true);

  const resetFormHandler = (event) => {
    if (isFormReset) {
      setIsFormReset(false);
    } else {
      setIsFormReset(true);
    }
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentForm resetForm={resetFormHandler}/>
      {isFormReset ? (
        <p textAlign="center">No investment calculated yet.</p>
      ) : (
        <ResultTable />
      )}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
