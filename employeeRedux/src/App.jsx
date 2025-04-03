import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import View from "./components/View";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/" element={<View />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
