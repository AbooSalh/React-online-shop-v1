import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// css 
import "./index.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
// components
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Users from "./pages/dashboard/Users";
export default function App(params) {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users"  element={<Users/>}/>
      </Routes>
    </Router>
  );
};
