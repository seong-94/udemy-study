import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ input }) {
  const userData = calculateInvestmentResults(input);
  return <>{/* <div>{userData}</div> */}</>;
}
