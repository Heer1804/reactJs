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
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add Data</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} value={formData.name} style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} value={formData.email} style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} value={formData.password} style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label>Gender</label>
            <div style={styles.radioGroup}>
              <input type="radio" name="gender" value="male" onChange={handleChange} checked={formData.gender === "male"} />
              <label> Male</label>
              <input type="radio" name="gender" value="female" onChange={handleChange} checked={formData.gender === "female"} style={{ marginLeft: "10px" }} />
              <label> Female</label>
            </div>
          </div>

          <div style={styles.inputGroup}>
  <label>Hobbies</label>
  <div style={styles.hobbyContainer}>
    {["Music", "Reading", "Coding", "Dancing"].map((h) => (
      <label key={h} style={styles.hobbyLabel}>
        <input type="checkbox" name="hobby" value={h} onChange={handleChange} checked={formData.hobby.includes(h)} />
        {h}
      </label>
    ))}
  </div>
</div>


          <div style={styles.inputGroup}>
            <label>City</label>
            <select name="city" value={formData.city} onChange={handleChange} style={styles.select}>
              <option value="">Select City</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label>Profile Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} style={styles.fileInput} />
            {formData.image && (
              <div style={styles.imagePreview}>
                <p>Preview:</p>
                <img src={formData.image} alt="Preview" style={styles.image} />
              </div>
            )}
          </div>

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
      maxWidth: "500px",
      margin: "100px auto 30px",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      color: "#fff",
      textAlign: "center",
    },
  card: {
    backdropFilter: "blur(10px)",
    background: "rgb(255 255 255 / 6%)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "rgb(255 255 255 / 6%) 0px 4px 20px",
    width: "400px",
    textAlign: "center",
    transition: "0.3s",
    border: "1.5px solid rgba(255, 255, 255, 0.2)",
  },
  heading: {
    marginBottom: "20px",
    color: "#fff",
    fontSize: "22px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    fontSize: "16px",
    transition: "0.3s",
  },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
  },
  fileInput: {
    width: "100%",
  },
  imagePreview: {
    marginTop: "10px",
  },
  image: {
    width: "90px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  button: {
    padding: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
  checkboxLabel: {
    display: "block",
    marginBottom: "5px",
    color: "#fff",
  },
  radioGroup: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
  },
  hobbyContainer: {
    display: "flex",
    gap: "15px", // Adds spacing between checkboxes
    flexWrap: "wrap", // Ensures it stays on one line but wraps if needed
    alignItems: "center",
  },
  hobbyLabel: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: "#fff",
  },
};

export default Home;
