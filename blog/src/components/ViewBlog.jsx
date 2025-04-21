import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/blogs/${id}`).then(res => setBlog(res.data));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/blogs/${id}`);
      navigate("/"); 
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mt-2">
      <div className="card shadow-lg border-0 rounded">
        <img src={blog.image} className="card-img-top rounded-top" alt={blog.title} />
        <div className="card-body">
          <h2 className="card-title text-center text-primary mb-3">{blog.title}</h2>
          <p className="text-muted text-center mb-4">{`By ${blog.blogger_name} | ${blog.category}`}</p>
          <p className="card-text mb-4">{blog.description}</p>

          <div className="d-flex justify-content-end">
    
            <Link to={`/update/${id}`} className="btn btn-warning btn-lg w-48 me-4">Update</Link>
            
            <button className="btn btn-danger btn-lg w-48" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
