import { useState } from "react";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import Userinput from "./components/Userinput/Userinput";

function App() {
  // const [results, setResults] = useState(null);
  const [userInput, setUserInput] = useState(null);

  // const calculateHandler = (userInput) => {
  //   // Should be triggered when form is submitted
  //   // You might not directly want to bind it to the submit event on the form though...

  //   const yearlyData = []; // per-year results

  //   let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
  //   const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
  //   const expectedReturn = +userInput["expected-return"] / 100;
  //   const duration = +userInput["duration"];

  //   // The below code calculates yearly results (total savings, interest etc)
  //   for (let i = 0; i < duration; i++) {
  //     const yearlyInterest = currentSavings * expectedReturn;
  //     currentSavings += yearlyInterest + yearlyContribution;
  //     yearlyData.push({
  //       // feel free to change the shape of the data pushed to the array!
  //       year: i + 1,
  //       yearlyInterest: yearlyInterest,
  //       savingsEndOfYear: currentSavings,
  //       yearlyContribution: yearlyContribution,
  //     });
  //   }

  //   // do something with yearlyData ...
  //   setResults(yearlyData);

  // };

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  }

  const yearlyData = []; // per-year results

  if(userInput){
    let currentSavings = userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];
  
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }


  return (
    <div>
      <Headers />

      <Userinput onCalculate={calculateHandler}/>

      {!userInput && <p>No investment calculated yet.</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment = {userInput['current-savings']}/>}    
    </div>
  );
}

export default App;
