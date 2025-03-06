import React, { Fragment } from "react";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Fragment>
         <button
      aria-label="Toggle theme"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: theme === "light" ? "#222" : "#fff",
        color: theme === "light" ? "#fff" : "#222",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        transition: "background-color 0.3s, color 0.3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem", // Adjusted for better visibility
      }}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙" : "🌞"}
    </button>
    </Fragment>
   
  );
}

export default ThemeToggle;
