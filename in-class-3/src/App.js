import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const countUp = () => {
    setCounter(counter + 1);
  };

  const countDown = () => {
    setCounter(counter - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            borderRadius: "8%",
            width: "5vw",
          }}
          onClick={countDown}
        >
          -
        </button>
        {counter}
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            borderRadius: "8%",
            width: "5vw",
          }}
          onClick={countUp}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
