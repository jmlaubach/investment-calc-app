const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ResultTable(props) {

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.totalSavings)}</td>
            <td>{formatter.format(item.interestForYear)}</td>
            <td>{formatter.format(item.totalInterest)}</td>
            <td>{formatter.format(item.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
