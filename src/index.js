import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CarritoProvider } from "./context/CarritoContext";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import { DarkModeProvider } from "./context/darkModeContext";
// import './utils/bd-firebase'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CarritoProvider>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </CarritoProvider>
);
