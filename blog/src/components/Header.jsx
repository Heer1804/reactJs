import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2 shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fw-bold" to="/">BlogApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link fs-5 text-light mx-3" to="/add">Add Blog</Link>
              <Link className="nav-link fs-5 text-light mx-3" to="/">View Blogs</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
