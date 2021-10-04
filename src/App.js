import { useState } from "react";
import "./styles.css";

export default function App() {
  var [statement, setStatement] = useState("");
  var [year, setYear] = useState("");

  function isLeapYear() {
    var flag = 0;
    if (year > 0) {
      if (Number(year) % 400 === 0) {
        return 1;
      }
      if (Number(year) % 100 === 0) {
        return 0;
      }
      if (Number(year) % 4 === 0) {
        return 1;
      }
    } else {
      return 2;
    }
    return flag;
  }

  function clickHandler() {
    var flag = isLeapYear();
    switch (flag) {
      case 0: {
        setStatement(year + " is not a leap year.");
        break;
      }
      case 1: {
        setStatement(year + " is a leap year.");
        break;
      }
      default:
        setStatement("please enter a valid input.");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>is Leap Year? 🤔</h1>
        <input
          placeholder={"enter a year"}
          onChange={(element) => setYear(element.target.value)}
        />
        <button onClick={() => clickHandler()}>Check</button>
        <p>{statement}</p>
      </div>
    </div>
  );
}
