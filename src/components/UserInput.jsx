import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>초기 자금</label>
          <input
            required
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) => onChange("initialInvestment", event)}
          />
        </p>
        <p>
          <label>연간 자금</label>
          <input
            required
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) => onChange("annualInvestment", event)}
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
            onChange={(event) => onChange("expectedReturn", event)}
          />
        </p>
        <p>
          <label>기간</label>
          <input
            required
            type="number"
            value={userInput.duration}
            onChange={(event) => onChange("duration", event)}
          />
        </p>
      </div>
    </section>
  );
}
