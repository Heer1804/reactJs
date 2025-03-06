import React, { useState } from "react";


/*
Controlled Components :
1 : A controlled component is a form input element where React Controls the state of input value.
2 : The value is stored in react state {useState}.
3 : and any update to the input field(value) updated the state.

How it works :
1 : The components has an internal state (useState).
2 : The input fields value is bound to the state.
3 : Every change triggers an onChange handler, update the state.
*/

function Controlled() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name : ${name}`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <form onSubmit={handleSubmit} style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "rgb(200 255 201)" }}>
        <h2 style={{ display: "block",color:"black", marginBottom: "10px", fontWeight: "bold" }}>
          Name
        </h2>
        <input 
          type="text" 
          value={name} 
          onChange={handleChange} 
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "10px", width: "80%" }}
        />
        <button 
          type="submit" 
          style={{ padding: "8px 16px", backgroundColor: "rgb(0 255 144)", color: "black", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Controlled;
