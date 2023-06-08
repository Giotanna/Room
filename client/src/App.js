import React, { useState, Fragment } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router,Route, Routes , Navigate} from 'react-router-dom';
import "./App.css";
import useToken from "./components/UseToken";


// components
import StartPage from "./components/StartPage";
import HomePage from "./components/HomePage";

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }
// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }


function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <StartPage setToken={setToken} />
  }
  return (
    <Fragment>
      <div className="wrapper">
        <Routes>
            <Route path="/" element={<Navigate to="/HomePage" />} />
            <Route path="/homePage" element={<HomePage />} />
        </Routes>
    </div>
    </Fragment>
  );
}

export default App;
