// index.js is main js file which add data to index.html

// Import required modules
import React from "react";
import ReactDOM from "react-dom/client";
// import stylesheet
import "./index.css";
// import App
import App from "./App";

// Get root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App to the root
root.render(<App />);
