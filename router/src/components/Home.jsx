import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState(() => {
    const data = localStorage.getItem("formdata");
    return data ? JSON.parse(data) : { name: "", email: "",password:"" };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("formdataList")) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem("formdataList", JSON.stringify(updatedData));;
    setFormData({ name: "", email: "" ,password:""});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Home Page</h2>
      <form method="post" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input type="text" name="name" onChange={handleChange} value={formData.name} />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input type="email" name="email" onChange={handleChange} value={formData.email} />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" name="password" onChange={handleChange} value={formData.password} />
              </td>
            </tr>
          <tr>
            <td>Gender</td>
              <td>
                <input type="radio" name="gender" onChange={handleChange} value="male" checked={formData.gender=="male"?"checked":""} />Male
                <input type="radio" name="gender" onChange={handleChange} value="female" checked={formData.gender=="female"?"checked":""} />Female
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" name="submit" value="Save" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Home;
