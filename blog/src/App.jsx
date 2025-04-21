import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BlogForm from "./components/AddBlog";
import BlogList from "./components/AllBlogs";
import BlogDetail from "./components/ViewBlog";
import Header from "./components/Header";

function App() {
  return (
    <div>
     <Header/>
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/add" element={<BlogForm />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
