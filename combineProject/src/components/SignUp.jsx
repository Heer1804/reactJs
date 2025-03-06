import React, { useState } from "react";

const SignUp = ({ onSubmit, theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    file: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all required fields");
      return;
    }
    onSubmit(formData);
  };

  // Theme-based styles
  const isLightTheme = theme === "light";

  const boxStyle = {
    background: isLightTheme ? "white" : "#222",
    color: isLightTheme ? "black" : "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: isLightTheme
      ? "0 4px 6px rgba(0, 0, 0, 0.1)"
      : "0 4px 6px rgba(255, 255, 255, -0.1)",
    textAlign: "center",
    width: "300px",
    marginTop:"80px"
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    margin: "10px",
    border: "1px solid",
    borderRadius: "5px",
    borderColor: isLightTheme ? "#ccc" : "#555",
    background: isLightTheme ? "#fff" : "#333",
    color: isLightTheme ? "black" : "white",
  };

  return (
    <div style={boxStyle}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} style={inputStyle} />
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} style={inputStyle} />
        <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} style={inputStyle} />
        <input type="number" name="phone" placeholder="Enter your phone no" value={formData.phone} onChange={handleChange} style={inputStyle} />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} style={inputStyle} />
        <input type="file" name="file" onChange={handleChange} style={inputStyle} />
        <button type="submit" style={{ backgroundColor: "rgb(100, 108, 255)", padding: "10px", color: "white", border: "none", borderRadius: "5px", marginTop: "10px" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

