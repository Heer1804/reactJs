import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


import "../display.css";

function Display() {
  const [formData, setFormData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    const data = localStorage.getItem("formdataList");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const delData = (email) => {
    let updatedData = formData.filter((item) => item.email !== email);
    setFormData(updatedData);
    localStorage.setItem("formdataList", JSON.stringify(updatedData));
  };

  const filteredData = formData.filter(
    (item) =>
      (item.name && item.name.toLowerCase().includes(search.toLowerCase())) ||
      (item.email && item.email.toLowerCase().includes(search.toLowerCase()))
  );

  const sortedData = [...filteredData].sort((a, b) => {
    let valA = a[sortField]?.toString().toLowerCase() || "";
    let valB = b[sortField]?.toString().toLowerCase() || "";
    return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  const totalPages = Math.max(1, Math.ceil(sortedData.length / recordsPerPage));
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortedData.slice(indexOfFirstRecord, indexOfLastRecord);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [sortedData, totalPages]);

  return (
    <div>
      <h3 className="title">Students Data</h3>
      <div className="controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="sort-select" value={sortField} onChange={(e) => setSortField(e.target.value)}>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="city">City</option>
        </select>
        <button className="sort-btn" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          {sortOrder === "asc" ? "⬆" : "⬇"}
        </button>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>City</th>
            <th>Hobbies</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((v, i) => (
              <tr key={i}>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>••••••••</td>
                <td>{v.gender}</td>
                <td>{v.city}</td>
                <td>{v.hobby?.length > 0 ? v.hobby.join(", ") : "No hobbies"}</td>
                <td>{v.image ? <img src={v.image} alt="User" className="user-image" /> : "No Image"}</td>
                <td>
                  <button className="delete-btn" onClick={() => delData(v.email)}><MdDeleteOutline />
                  </button>
                  <Link to={`/update/${i}`}><FaEdit />
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-data">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button className="pagination-btn" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="pagination-info">Page {currentPage} of {totalPages}</span>
        <button className="pagination-btn" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Display;