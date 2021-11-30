import React, { useState } from "react";

export default function App() {
  
  const [numberOfStars, setNumberOfStars] = useState("");

  const getStars = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += "*";
      }
      string += "\n";
    }
    return string && console.log(string);
  };

  const reverse = (n) => {
    let string = "";
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        string += "*";
      }
      string += "\n";
    }
    return string && console.log(string);
  };

  return (
    <div className="App">
      <input
        type="number"
        value={numberOfStars}
        onChange={(e) => setNumberOfStars(e.target.value)}
      />
      <div>{getStars(numberOfStars)}</div>
      <button onChange={() => reverse(numberOfStars)}> Revers</button>
    </div>
  );
}
