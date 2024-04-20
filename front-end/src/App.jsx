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
import Page403 from "./pages/auth/403";
import Writer from "./pages/dashboard/Writer";
export default function App(params) {
  return (
    <Router>
      <Routes>
        {/* public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/google/callback" element={<GoogleCallBack />} />
        <Route path="403" element={<Page403 />} />
        {/* protected */}
        {/* <Route element={<RequireAuth />}> */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route element={<RequireAuth allowedRole={["1995","1992"]} />}>
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<User />} />
            <Route path="user/add" element={<AddUser />} />
          </Route>
          <Route element={<RequireAuth allowedRole={["1996", "1995" , "2001","1992"]} />}>
            <Route path="writer" element={<Writer />} />
          </Route>
        </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
}
