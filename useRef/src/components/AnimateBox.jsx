import React, { useRef } from "react";

function AnimateBox() {
  const boxRef = useRef(null);

  const moveBox = () => {
    boxRef.current.style.transform = "translateX(150px)";
    boxRef.current.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        ref={boxRef}
        style={{ 
          width: "50px", 
          height: "50px", 
          backgroundColor: "rgb(84, 47, 124)", 
          borderRadius: "8px", 
          margin: "20px auto", 
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      ></div>
      <button 
        onClick={moveBox} 
        style={{ 
          padding: "10px 20px", 
          fontSize: "1rem", 
          cursor: "pointer", 
          backgroundColor: "rgb(99 27 140)", 
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          transition: "background 0.3s ease-in-out", 
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        Move
      </button>
    </div>
  );
}

export default AnimateBox;