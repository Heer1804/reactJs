import React, { useEffect, useRef, useState } from "react";

function PreviousState() {
  const [count, setCount] = useState(0);
  const prevValueRef = useRef(0);

  useEffect(() => {
    prevValueRef.current = count;
  }, [count]);

  return (
    <div style={{ 
      textAlign: "center", 
      padding: "30px", 
      fontFamily: "Arial, sans-serif", 
      backgroundColor: "#f9e7ff", 
      borderRadius: "10px", 
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      maxWidth: "400px",
      margin: "50px auto"
    }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "10px",  color: "rgb(99 27 140)" }}>Count: {count}</h2>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "rgb(99 27 140)" }}>
        Prev: {prevValueRef.current !== undefined ? prevValueRef.current : "N/A"}
      </h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: "rgb(84 47 124)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          transition: "background 0.3s",
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default PreviousState;
