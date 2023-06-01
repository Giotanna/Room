import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./style/startPage.css";

const StartPage = () => {
  const [activeForm, setActiveForm] = useState("login");

  const handleFormToggle = (formType) => {
    setActiveForm(formType);
  };
  return (
    <Fragment>
      <div className="start-page-container pb-4">
        <Navbar />
      </div>
      <div className="panel-body container mt-4">
        <div className="btn-group">
          <button
            className={`btn ${activeForm === "login" ? "active" : ""}`}
            onClick={() => handleFormToggle("login")}
          >
            Σύνδεση
          </button>
          <button
            className={`btn ${activeForm === "register" ? "active" : ""}`}
            onClick={() => handleFormToggle("register")}
          >
            Εγγραφή
          </button>
        </div>
        <div className="form-container">
          {activeForm === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </Fragment>
  );
};

export default StartPage;
