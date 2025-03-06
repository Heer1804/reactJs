import React, { useRef, useState } from "react";

function Timer({ theme }) {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const restartTimer = () => {
    stopTimer();
    setSeconds(0);
    startTimer();
  };

  // Theme-based styles (Matching Counter & Clock)
  const isLightTheme = theme === "light";

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isLightTheme ? "rgb(214 225 247)" : "rgb(30 30 30)", // Matching background
  };

  const boxStyle = {
    background: isLightTheme ? "white" : "#222",
    color: isLightTheme ? "black" : "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: isLightTheme
      ? "0 4px 6px rgba(0, 0, 0, 0.2)"
      : "0 4px 6px rgba(255, 255, 255, -0.2)",
    textAlign: "center",
    width: "300px",
  };

  const buttonStyle = (bgColor) => ({
    padding: "10px 20px",
    margin: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: bgColor,
    color: "white",
    border: "none",
    borderRadius: "5px",
  });

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Timer: {seconds}</h1>
        <button onClick={startTimer} style={buttonStyle("#28a745")}>Start</button>
        <button onClick={stopTimer} style={buttonStyle("#dc3545")}>Stop</button>
        <button onClick={restartTimer} style={buttonStyle("rgb(255 167 7)")}>Restart</button>
      </div>
    </div>
  );
}

export default Timer;
