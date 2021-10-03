import { useState } from "react";
import "./styles.css";

export default function App() {
  var [statement, setStatement] = useState("");
  var [year, setYear] = useState("");

  function isLeapYear() {
    if (Number(year) % 400 === 0) {
      return true;
    }
    if (Number(year) % 100 === 0) {
      return false;
    }
    if (Number(year) % 4 === 0) {
      return true;
    }
  }

  function clickHandler() {
    var flag = isLeapYear();
    if (flag === true) {
      setStatement(year + " is a leap year");
    } else {
      setStatement(year + " is not a leap year");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>is Leap Year?</h1>
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
