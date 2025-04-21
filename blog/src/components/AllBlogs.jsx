
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:3001/blogs").then(res => setBlogs(res.data));
  }, []);

  const filtered = category === "All" ? blogs : blogs.filter(b => b.category === category);

  return (
    <>
      <div className="mb-3 text-center">
        {["All", "Entertainment", "Technology", "Sports", "Business", "Health", "Science"].map(cat => (
          <button
            key={cat}
            className={`btn btn-sm me-2 ${cat === category ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="row">
        {filtered.map(blog => (
          <div className="col-md-4" key={blog.id}>
            <div className="card shadow-sm mb-4 h-100">
              <img src={blog.image} className="card-img-top" alt={blog.title} style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text small text-muted">{blog.blogger_name} • {blog.category}</p>
                <p className="card-text">{blog.description.slice(0, 80)}...</p>
                <Link to={`/blog/${blog.id}`} className="btn btn-outline-primary mt-auto">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllBlogs 