import { useState } from 'react';
import InvestmentForm from "../Form/InvestmentForm";
import ResultTable from "../Table/ResultTable";

function Investments() {
  const [isFormReset, setIsFormReset] = useState(false);

  const resetFormHandler = () => {
    setIsFormReset(true);
  };
  return (
    <div>
      <InvestmentForm resetForm={resetFormHandler}/>
      {isFormReset ? (
        <p textAlign="center">No investment calculated yet.</p>
      ) : (
        <ResultTable />
      )}
    </div>
  );
}

export default Investments;