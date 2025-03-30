import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentsTable from './Display.jsx'; 


const App = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    gender: "",
    hobby: [],
    city: "",
    image: "",
  });
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("formdataList");
    return storedData ? JSON.parse(storedData) : [];
  });

  const cities = ["Surat", "Bhavnagar", "Ahmedabad", "Baroda", "Mumbai"];

  useEffect(() => {
    localStorage.setItem("formdataList", JSON.stringify(data));
  }, [data]); // Sync localStorage whenever data changes

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
    const newData = { ...formData, id: Date.now().toString() };
    setData((prevData) => [...prevData, newData]); // Update state
    setFormData({
      id: "",
      name: "",
      email: "",
      password: "",
      gender: "",
      hobby: [],
      city: "",
      image: "",
    });
    toast.success("✅ Record Inserted Successfully!");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        hobby: checked
          ? [...prevData.hobby, value]
          : prevData.hobby.filter((h) => h !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const delData = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <h2 className="heading">Add Data</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className="input"
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="input"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="input"
              />
            </div>

            <div className="input-group">
              <label>Gender</label>
              <div className="radio-group">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={formData.gender === "male"}
                />
                <label>Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender === "female"}
                />
                <label>Female</label>
              </div>
            </div>

            <div className="input-group">
              <label>Hobbies</label>
              <div className="hobby-container">
                {["Music", "Reading", "Coding", "Dancing"].map((h) => (
                  <label key={h} className="hobby-label">
                    <input
                      type="checkbox"
                      name="hobby"
                      value={h}
                      onChange={handleChange}
                      checked={formData.hobby.includes(h)}
                    />
                    {h}
                  </label>
                ))}
              </div>
            </div>

            <div className="input-group">
              <label>City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="select"
              >
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
              />
              {formData.image && (
                <div className="image-preview">
                  <p>Preview:</p>
                  <img src={formData.image} alt="Preview" className="image" />
                </div>
              )}
            </div>

            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
      <StudentsTable data={data} delData={delData} />
    </div>
  );
};

export default App;