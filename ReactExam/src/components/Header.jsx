import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          React App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fs-5 px-3" to="/">
                Add Data
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 px-3" to="/view">
                View Data
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;