import React, { useState } from "react";
import axios from "axios";

const categories = ["Entertainment", "Technology", "Sports", "Business", "Health", "Science"];

const AddBlog = ({ onBlogAdded }) => {
  const [form, setForm] = useState({
    category: "",
    title: "",
    blogger_name: "",
    image: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.category) newErrors.category = "Select a category";
    if (form.title.length < 3) newErrors.title = "Title must be at least 3 characters";
    if (form.blogger_name.length < 3) newErrors.blogger_name = "Name must be at least 3 characters";
    if (!form.image.startsWith("http")) newErrors.image = "Enter a valid image URL";
    if (form.description.length < 3) newErrors.description = "Description too short";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    await axios.post("http://localhost:3001/blogs", form);
    onBlogAdded();
    setForm({ category: "", title: "", blogger_name: "", image: "", description: "" });
  };

  return (
    <div className="card p-4 shadow-sm mb-4">
      <h4 className="mb-3">Add a New Blog</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Category</label>
          <select name="category" className="form-select" value={form.category} onChange={handleChange}>
            <option value="">Select</option>
            {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
          </select>
          <div className="text-danger">{errors.category}</div>
        </div>
        <div className="mb-2">
          <label className="form-label">Title</label>
          <input name="title" className="form-control" value={form.title} onChange={handleChange} />
          <div className="text-danger">{errors.title}</div>
        </div>
        <div className="mb-2">
          <label className="form-label">Blogger Name</label>
          <input name="blogger_name" className="form-control" value={form.blogger_name} onChange={handleChange} />
          <div className="text-danger">{errors.blogger_name}</div>
        </div>
        <div className="mb-2">
          <label className="form-label">Image URL</label>
          <input name="image" className="form-control" value={form.image} onChange={handleChange} />
          <div className="text-danger">{errors.image}</div>
        </div>
        <div className="mb-2">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" value={form.description} onChange={handleChange}></textarea>
          <div className="text-danger">{errors.description}</div>
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

export default AddBlog;