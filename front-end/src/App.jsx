import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
// css
import "./index.css";
// components
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Users from "./pages/dashboard/Users";
import GoogleCallBack from "./API/GoogleCallBack";
import Dashboard from "./pages/dashboard/Dashboard";
export default function App(params) {
  return (
    <Router>
      <Routes>
        {/* public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/google/callback" element={<GoogleCallBack />} />
        {/* protected */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}
