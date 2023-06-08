import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
// import LoginForm from "./LoginForm";
// import RegisterForm from "./RegisterForm";
 import "./style/homePage.css";

const HomePage = () => {
//   const [activeForm, setActiveForm] = useState("login");

//   const handleFormToggle = (formType) => {
//     setActiveForm(formType);
//   };


  return (
    <Fragment>
        <div className="start-page-container pb-4">
        <Navbar />
      </div>
      <div>
        <h1>Home Page</h1>
      </div>
    </Fragment>
  );
};

export default HomePage;

