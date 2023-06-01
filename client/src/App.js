import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// components

// import ResultMatches from "./components/ResultMatches";
// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";
// import Navbar from "./components/Navbar";
import StartPage from "./components/StartPage";

function App() {
  return (
    <Fragment>
      <div className="container">
        <StartPage />
      </div>
    </Fragment>
  );
}

export default App;
