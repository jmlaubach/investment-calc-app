import { useState } from 'react';

function InvestmentForm(props) {

  const resetHandler = () => {
    props.resetForm();
  }

  const submitHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    let totaledInterest = 0;
    let vestedCapital = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      vestedCapital += currentSavings;
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

    props.onSaveInvestmentData(yearlyData)
  };
    
  return (
    <form className="form" onSubmit={submitHandler}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" id="current-savings" />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" id="yearly-contribution" />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
            Expected Interest (%, per year)
        </label>
        <input type="number" id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" id="duration" />
      </p>
    </div>
      <p className="actions">
        <button className="buttonAlt" onClick={resetHandler}>
        Reset
        </button>
        <button type="submit" className="button">
        Calculate
        </button>
      </p>
    </form>
  );
}

export default InvestmentForm;