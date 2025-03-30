import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [formData, setFormData] = useState(() => {
    const data = localStorage.getItem("formdata");
    return data
      ? JSON.parse(data)
      : { name: "", email: "", password: "", gender: "", hobby: [], city: "", image: "" };
  });

  const cities = ["Surat", "Bhavnagar", "Ahmedabad", "Baroda", "Mumbai"];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({ ...prevData, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("formdataList")) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem("formdataList", JSON.stringify(updatedData));
    
    // Reset formData including the image
    setFormData({ name: "", email: "", password: "", gender: "", hobby: [], city: "", image: "" });
    toast.success("✅ Record Inserted Successfully!");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        hobby: checked ? [...prevData.hobby, value] : prevData.hobby.filter((h) => h !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div style={{ ...styles.container, marginTop: '70px' }}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Students Data</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name</label>
            <input type="text" name="name" onChange={handleChange} value={formData.name} style={styles.input} placeholder="Enter your name" />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" name="email" onChange={handleChange} value={formData.email} style={styles.input} placeholder="Enter your email" />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" name="password" onChange={handleChange} value={formData.password} style={styles.input} placeholder="Enter your password" />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Gender</label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input type="radio" name="gender" value="male" onChange={handleChange} checked={formData.gender === "male"} />
                <span style={styles.radioText}>Male</span>
              </label>
              <label style={styles.radioLabel}>
                <input type="radio" name="gender" value="female" onChange={handleChange} checked={formData.gender === "female"} />
                <span style={styles.radioText}>Female</span>
              </label>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Hobbies</label>
            <div style={styles.hobbyContainer}>
              {["Music", "Reading", "Coding", "Dancing"].map((h) => (
                <label key={h} style={styles.hobbyLabel}>
                  <input type="checkbox" name="hobby" value={h} onChange={handleChange} checked={formData.hobby.includes(h)} />
                  <span style={styles.checkboxText}>{h}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>City</label>
            <select name="city" value={formData.city} onChange={handleChange} style={styles.select}>
              <option value="">Select your city</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Profile Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} style={styles.fileInput} />
            {formData.image && (
              <div style={styles.imagePreview}>
                <img src={formData.image} alt="Preview" style={styles.image} />
              </div>
            )}
          </div>

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>Submit</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "#ffffff", 
    padding: "40px 80px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "450px",
  },
  heading: {
    marginBottom: "30px",
    fontSize: "28px",
    textAlign: "center",
    color: "#333333",
    fontWeight: "700",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    color: "#555555", 
    fontSize: "18px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #cccccc", 
    background: "#f8f9fa",
    color: "#333333",
    fontSize: "14px",
    transition: "border-color 0.3s, background-color 0.3s",
  },
  select: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #cccccc",
    background: "#f8f9fa",
    color: "#333333",
    fontSize: "14px",
  },
  radioGroup: {
    display: "flex",
    gap: "20px",
  },
  radioLabel: {
    color: "#555555",
  },
  hobbyContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  hobbyLabel: {
    color: "#555555",
  },
  fileInput: {
    color: "#333333",
    fontSize: "14px",
  },
  imagePreview: {
    marginTop: "10px",
    textAlign: "center",
  },
  image: {
    maxWidth: "100px",
    borderRadius: "6px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: "12px 20px",
    background: "rgb(26 16 108)",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    fontSize: "16px",
    fontWeight: "600",
  },
};

export default Home;