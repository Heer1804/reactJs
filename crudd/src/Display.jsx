import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudentsTable = ({ data = [], delData }) => {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const filteredData = data.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.email.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    const valA = (a[sortField] || "").toString().toLowerCase();
    const valB = (b[sortField] || "").toString().toLowerCase();
    return sortOrder === "asc"
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });

  const totalPages = Math.ceil(sortedData.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortedData.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="container">
      <h3 className="heading">Students Data</h3>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />
        <select onChange={(e) => setSortField(e.target.value)} className="select">
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="city">City</option>
        </select>
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="sort-button"
        >
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
            currentRecords.map((v) => (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>••••••••</td>
                <td>{v.gender}</td>
                <td>{v.city}</td>
                <td>{v.hobby && v.hobby.length > 0 ? v.hobby.join(", ") : "No hobbies"}</td>
                <td>
                  {v.image ? <img src={v.image} alt="User" className="user-image" /> : "No Image"}
                </td>
                <td>
                  <button className="delete-btn" onClick={() => delData(v.id)}>
                    Delete
                  </button>
                  <Link className="update-btn" to={`/update/${v.id}`}>
                    Update
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-data">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <span className="pagination-text">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentsTable;