import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CookiesProvider } from "react-cookie";
// react-router

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <App />
    </CookiesProvider>
);
