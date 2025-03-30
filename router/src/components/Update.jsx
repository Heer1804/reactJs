import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  let { index } = useParams();
  let [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobby: [],
    city: "",
    image: "",
  });
  
  let navigate = useNavigate();

  useEffect(() => {
    let stuData = JSON.parse(localStorage.getItem("formdataList"));
    if (stuData && stuData[index]) {
      setStudent(stuData[index]);
    }
  }, [index]);

  let changeInput = (e) => {
    let { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  let changeHobby = (e) => {
    let { value, checked } = e.target;
    let updatedHobbies = checked
      ? [...student.hobby, value]
      : student.hobby.filter((h) => h !== value);
    setStudent({ ...student, hobby: updatedHobbies });
  };

  let submitData = (e) => {
    e.preventDefault();
    let formdata = JSON.parse(localStorage.getItem("formdataList"));
    formdata[index] = student;
    localStorage.setItem("formdataList", JSON.stringify(formdata));
    navigate("/display");
  };

  return (
    <div>
      <h2>Update Data</h2>
      <form method="post" onSubmit={submitData}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={changeInput}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={student.email}
                  onChange={changeInput}
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="text"
                  name="password"
                  value={student.password}
                  onChange={changeInput}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={student.gender === "male"}
                  onChange={changeInput}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={student.gender === "female"}
                  onChange={changeInput}
                />
                Female
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <select name="city" value={student.city} onChange={changeInput}>
                  <option value="">Select City</option>
                  <option value="Surat">Surat</option>
                  <option value="Bhavnagar">Bhavnagar</option>
                  <option value="Ahemdabad">Ahemdabad</option>
                  <option value="Baroda">Baroda</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Hobbies</td>
              <td>
                {["Music", "Reading", "Coding","Dancing"].map((h) => (
                  <label key={h}>
                    <input
                      type="checkbox"
                      name="hobby"
                      value={h}
                      checked={student.hobby.includes(h)}
                      onChange={changeHobby}
                    />
                    {h}
                  </label>
                ))}
              </td>
            </tr>
            <tr>
              <td>Image</td>
              <td>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setStudent({
                      ...student,
                      image: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                />
                {student.image && (
                  <img
                    src={student.image}
                    alt="User"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginLeft: "10px",
                    }}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" name="submit" value="Update" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Update;
