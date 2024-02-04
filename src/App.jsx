import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
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
        [inputIdentifier]: +newValue, // + 추가함으로써 string 을 number 값으로 더하기 가 가능하다함
      };
    });
  }

  return (
    <>
      {/* <h1 >React Investment Calculator</h1> */}
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;
