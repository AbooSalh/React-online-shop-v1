import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// react-router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// css 
import "./index.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
// components
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
