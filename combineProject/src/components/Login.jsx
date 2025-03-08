import { useState } from "react";

const LogIn = ({ onSubmit, credential, theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all details");
      return;
    }

    if (
      credential &&
      formData.name === credential.name &&
      formData.email === credential.email &&
      formData.password === credential.password
    ) {
      onSubmit(credential);
    } else {
      alert("Invalid Credentials");
    }
  };

  // Theme-based styles
  const isLightTheme = theme === "light";

  const boxStyle = {
    background: isLightTheme ? "white" : "#222",
    color: isLightTheme ? "black" : "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: isLightTheme
      ? "0 4px 6px rgba(0, 0, 0, 0.37)"
      : "0 4px 6px rgba(255, 255, 255, -0.6)",
    textAlign: "center",
    width: "300px",
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} style={inputStyle} />
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} style={inputStyle} />
        <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} style={inputStyle} />
        <button type="submit" style={{ backgroundColor: "rgb(100, 108, 255)", padding: "10px", color: "white", border: "none", borderRadius: "5px", marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;

