import { useState } from "react";
import InvestmentForm from "./components/InvestmentForm";
import ResultTable from "./components/ResultTable";
import Header from "./components/Header";

function App() {
  const [userInput, setUserInput] = useState(null);

  const saveHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["current-savings"];
    const yearlyContribution = userInput["yearly-contribution"];
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];
    let totaledInterest = 0;
    let vestedCapital = currentSavings;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      vestedCapital += yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;
      totaledInterest += yearlyInterest;
      yearlyData.push({
        year: i + 1,
        totalSavings: currentSavings,
        interestForYear: yearlyInterest,
        totalInterest: totaledInterest,
        investedCapital: vestedCapital,
      });
    }
  }

  return (
    <div>
      <Header />

      <InvestmentForm onCalculate={saveHandler} />

      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {userInput && <ResultTable data={yearlyData} />}
    </div>
  );
}

export default App;
