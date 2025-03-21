import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Display() {

    const [formData , setFormData] = useState([])

    useEffect(() => {
        const data = localStorage.getItem('formdataList');
        if (data) {
          setFormData(JSON.parse(data));
        }
      }, []);

    const delData = (i) => {
        let oldData = [...formData]
        oldData.splice(i,1)
        setFormData(oldData)
        localStorage.setItem("students" , JSON.stringify(oldData)) 
    }
    

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
    <h3>Sudents Data</h3>
    <table border="1" align="center" style={{ borderCollapse: 'collapse', minWidth: '300px' }}>
      <thead>
        <tr>
          <th style={{ padding: '10px',  color: '#fff' }}>Name</th>
          <th style={{ padding: '10px', color: '#fff' }}>Email</th>
          <th style={{ padding: '10px', color: '#fff' }}>Password</th>
          <th style={{ padding: '10px', color: '#fff' }}>Gender</th>
          <th style={{ padding: '10px', color: '#fff' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {formData.length > 0 ? (
          formData.map((v, i) => (
            <tr key={i}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{v.name}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{v.email}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{v.password}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{v.gender}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <button onClick={() => delData(i)} >Delete</button>
                <Link to={"/update/" + i}>Update</Link>
 
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2" style={{ padding: '15px', textAlign: 'center', color: '#666' }}>
              No data available
            </td>
          </tr>
        )}
  </tbody>
      </table>
    </div>
  );
}

export default Display
