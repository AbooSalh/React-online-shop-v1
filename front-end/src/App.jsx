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
import RequireAuth from "./pages/auth/RequireAuth";
import User from "./pages/dashboard/User";
import AddUser from "./pages/dashboard/AddUser";
export default function App(params) {
  return (
    <Router>
      <Routes>
        {/* public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/google/callback" element={<GoogleCallBack />} />
        {/* protected */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<User/>}/>
            <Route path="user/add" element={<AddUser/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
