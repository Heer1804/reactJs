import React, { useEffect, useState } from 'react';
import { getFire } from '../firebase';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    Date: '',
    department: '',
    phone: '',
    city: '',
  });
  const [editId, setEditId] = useState(null);

  const departments = ['HR', 'Sales', 'Engineering', 'Marketing', 'Finance'];
  const cities = ['Surat', 'Mumbai', 'Pune', 'Baroda']; 

  const fetchData = async () => {
    try {
      const allRecords = await getDocs(collection(getFire, 'employee'));
      const docs = allRecords.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(docs);
    } catch (err) {
      console.error('Error fetching documents:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const docRef = doc(getFire, 'employee', editId);
        await updateDoc(docRef, form);
      } else {
        await addDoc(collection(getFire, 'employee'), form);
      }
      setForm({ name: '', email: '', Date: '', department: '', phone: '', city: '' });
      setEditId(null);
      fetchData();
    } catch (err) {
      console.error('Error adding/updating document:', err);
    }
  };

  const handleEdit = (emp) => {
    setForm({
      name: emp.name,
      email: emp.email,
      Date: emp.Date,
      department: emp.department || '',
      phone: emp.phone || '',
      city: emp.city || '',
    });
    setEditId(emp.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(getFire, 'employee', id));
      fetchData();
    } catch (err) {
      console.error('Error deleting document:', err);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center text-primary">
        Firebase Employee {editId ? 'Update' : 'Form'}
      </h2>

      <form className="row g-4 mb-5 p-4 rounded shadow-sm" onSubmit={handleSubmit}>
        <h4 className="text-primary mb-3">Employee Details</h4>

        <div className="col-md-4">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            className="form-control rounded-3 shadow-sm"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="form-control rounded-3 shadow-sm"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Birthdate</label>
          <input
            type="date"
            name="Date"
            className="form-control rounded-3 shadow-sm"
            value={form.Date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Department</label>
          <select
            name="department"
            className="form-select rounded-3 shadow-sm"
            value={form.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter 10-digit number"
            className="form-control rounded-3 shadow-sm"
            value={form.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">City</label>
          <select
            name="city"
            className="form-select rounded-3 shadow-sm"
            value={form.city}
            onChange={handleChange}
            required
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 text-center mt-3">
          <button type="submit" className="btn btn-lg btn-primary px-5 rounded-pill shadow">
            {editId ? 'Update' : 'Add'} Employee
          </button>
        </div>
      </form>

      <h4 className="mb-3">Employee List</h4>
      <table className="table table-striped table-bordered text-center">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Department</th>
            <th>Phone</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.Date}</td>
                <td>{emp.department || 'N/A'}</td>
                <td>{emp.phone || 'N/A'}</td>
                <td>{emp.city || 'N/A'}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(emp)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
