import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/category" element={<h1>Category</h1>} />
          <Route path="/product" element={<h1>Product</h1>} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
