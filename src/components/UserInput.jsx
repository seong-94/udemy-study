import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>초기 자금</label>
          <input
            required
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) => handleChange("initialInvestment", event)}
          />
        </p>
        <p>
          <label>연간 자금</label>
          <input
            required
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) => handleChange("annualInvestment", event)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>예상 이자</label>
          <input
            required
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) => handleChange("expectedReturn", event)}
          />
        </p>
        <p>
          <label>기간</label>
          <input
            required
            type="number"
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event)}
          />
        </p>
      </div>
    </section>
  );
}
