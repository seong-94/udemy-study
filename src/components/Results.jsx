import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const userData = calculateInvestmentResults(input);
  const initialInvestment = userData[0];
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((yearData) => {
          const totaInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(yearData.totaInterest)}</td>
              <td>{yearData.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
