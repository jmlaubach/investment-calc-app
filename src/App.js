import logo from './assets/investment-calculator-logo.png';
import InvestmentForm from './components/Form/InvestmentForm';
import ResultTable from './components/Table/ResultTable';

function App() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentForm />

      <ResultTable />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
