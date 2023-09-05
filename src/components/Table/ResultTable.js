function ResultTable(props) {

  const investingData = props.rows;

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
      {props.rows.map((item, index) => (
        <tr key={index}>
          <td>{item.year}</td>
          <td>{item.totalSavings}</td>
          <td>{item.interestForYear}</td>
          <td>{item.totalInterest}</td>
          <td>{item.investedCapital}</td>
        </tr>
      ))}
    </tbody>
    </table>
  );
}

export default ResultTable;