import React, { useState } from 'react'

const SignUp = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        dob: "",
        file: ""
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            alert("Please fill all the fields");
        }
        onSubmit(formData)
    };
    return (
        <div style={{
            padding: "10px",
            maxWidth: "500px",
            margin: "auto",
            border: "1px solid black",
            boxShadow : "black 0px 2px 10px 1px",
            backgroundColor:'#0021790a',
            borderRadius: "5px",
        }}>
            <h2 >Sign-Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Enter Your Name' value={formData.name} onChange={handleChange} style={{ width: "90%", padding: "8px", margin: "10px" }} />

                <input type="email" name="email" placeholder='Enter Your email' value={formData.email} onChange={handleChange} style={{ width: "90%", padding: "8px", margin: "10px" }} />

                <input type="password" name="password" placeholder='Enter Your password' value={formData.password} onChange={handleChange} style={{ width: "90%", padding: "8px", margin: "10px" }} />

                <input type="number" name="phone" placeholder='Enter Your phone no' value={formData.phone} onChange={handleChange} style={{ width: "90%", padding: "8px", margin: "10px" }} />

                <input type="date" name="dob" placeholder='Enter Your dob' value={formData.dob} onChange={handleChange} style={{ width: "90%", padding: "8px", margin: "10px" }} />

                <input type="file" name="file" value={formData.file} onChange={handleChange} style={{ width: "90%", padding: "8px", margin: "10px" }} />

                <button type='submit' style={{backgroundColor:"#00138b5e", marginBottom:'8px', paddingBottom:'10px'}}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp


