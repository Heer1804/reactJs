


import React, { useEffect, useRef, useState } from "react";

const Clock = ({ theme }) => {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const min = date.getMinutes().toString().padStart(2, "0");
    const sec = date.getSeconds().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} : ${min} : ${sec} ${amPm}`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const setGreeting = (hours) => {
    if (hours < 12) return "Good Morning";
    if (hours < 16) return "Good Afternoon";
    if (hours < 19) return "Good Evening";
    return "Good Night";
  };

  // Theme-based styles (same as Counter)
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
    backgroundColor: isLightTheme ? "rgb(214 225 247)" : "rgb(30 30 30)", 
  };

  const boxStyle = {
    background: isLightTheme ? "white" : "#222",
    color: isLightTheme ? "black" : "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: isLightTheme
      ? "0 4px 6px rgba(0, 0, 0, 0.1)"
      : "0 4px 6px rgba(255, 255, 255, -0.18)",
    textAlign: "center",
    width: "300px",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ marginBottom: "10px" }}>{setGreeting(time.getHours())}</h2>
        <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{formatTime(time)}</h1>
        <p style={{ fontSize: "1.2rem" }}>{formatDate(time)}</p>
      </div>
    </div>
  );
};

export default Clock;

