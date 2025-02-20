import { useState } from "react";


const LogIn = ({ onSubmit, credential }) => {
  const [formData, setFormData] = useState({
    name : "",
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
      formData.name == credential.name &&
      formData.email == credential.email &&
      formData.password == credential.password
    ) {
      onSubmit(credential);
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <div
    style={{
      padding: "10px",
      maxWidth: "500px",
      margin: "auto",
      border: "1px solid black",
      boxShadow : "black 0px 2px 10px 1px",
      backgroundColor:'#0021790a',
      borderRadius: "5px",
  }}
    >
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
      <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", margin: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "90%", padding: "10px", margin: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "90%", padding: "10px", margin: "10px" }}
        />
        <button type="submit"  style={{backgroundColor:"#00138b5e", marginTop:'18px', paddingBottom:'10px'}}>Submit</button>
      </form>
    </div>
  );
};

export default LogIn;


