

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

  let data = useParams();
  let [student,setStudent] = useState({})
  let navigate = useNavigate();

  useEffect(()=>{
    console.log(data)
    let stuData = JSON.parse(localStorage.getItem('formdataList'))
    setStudent(stuData[data.index])
  },[setStudent])

  let changeInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setStudent({...student,[name]:value})
  }

  let submitData = (e) => {
    e.preventDefault();
    let formdata = JSON.parse(localStorage.getItem('formdataList'))
    formdata[data.index] = student;
    localStorage.setItem('formdataList',JSON.stringify(formdata))
    navigate("/")
  }
 
  return (
    <div>
      <h2>Update Data</h2>
      <form method="post" onSubmit={(e) => submitData(e)}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input type="text" name="name" value={student.name ? student.name:''} onChange={(e)=>changeInput(e)}/>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input type="email" name="email" value={student.email ? student.email :''} onChange={(e)=>changeInput(e)}/>
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="text" name="password"  value={student.password ? student.password :''} onChange={(e)=>changeInput(e)} />
              </td>
            </tr>

            <tr>
            <td>Gender</td>
              <td>
                <input type="radio" name="gender" onChange={(e)=>changeInput(e)}  value="male" checked={student.gender=="male"?"checked":""} />Male
                <input type="radio" name="gender" onChange={(e)=>changeInput(e)}  value="female" checked={student.gender=="female"?"checked":""} />Female
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
