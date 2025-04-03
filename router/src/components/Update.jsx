import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../update.css";

const Update = () => {
  let { index } = useParams();
  let navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobby: [],
    city: "",
  });

  useEffect(() => {
    const stuData = JSON.parse(localStorage.getItem("formdataList")) || [];
    const idx = parseInt(index, 10); 
    if (!isNaN(idx) && stuData[idx]) {
      setStudent(stuData[idx]);
    } else {
      console.error("No student data found for index:", idx);
    }
  }, [index]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const changeHobby = (e) => {
    const { value, checked } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      hobby: checked ? [...prevState.hobby, value] : prevState.hobby.filter((h) => h !== value),
    }));
  };

  const submitData = (e) => {
    e.preventDefault();
    const formdata = JSON.parse(localStorage.getItem("formdataList")) || [];
    formdata[index] = student;
    localStorage.setItem("formdataList", JSON.stringify(formdata));
    navigate("/display");
  };

  return (
    <div className="update-container">
      <h2 className="update-title">Update Data</h2>
      <form onSubmit={submitData} className="update-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={student.name} onChange={changeInput} className="form-input" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={student.email} onChange={changeInput} className="form-input" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={student.password} onChange={changeInput} className="form-input" />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-options">
            <label>
              <input type="radio" name="gender" value="male" checked={student.gender === "male"} onChange={changeInput} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" checked={student.gender === "female"} onChange={changeInput} />
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>City</label>
          <select name="city" value={student.city} onChange={changeInput} className="form-input">
            <option value="">Select City</option>
            {["Surat", "Bhavnagar", "Ahmedabad", "Baroda", "Mumbai"].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Hobbies</label>
          <div className="hobby-options">
            {["Music", "Reading", "Coding", "Dancing"].map((h) => (
              <label key={h}>
                <input type="checkbox" name="hobby" value={h} checked={student.hobby.includes(h)} onChange={changeHobby} />
                {h}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="submit-btn">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;