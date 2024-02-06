import { useState } from "react";

export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>초기 자금</label>
          <input
            required
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) => onChangeInput("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>연간 자금</label>
          <input
            required
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) => onChangeInput("annualInvestment", event.target.value)}
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
            onChange={(event) => onChangeInput("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>기간</label>
          <input
            required
            type="number"
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
