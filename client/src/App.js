import React, { Fragment } from "react";
import "./App.css";

// components

import ResultMatches from "./components/ResultMatches";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <Fragment>
      <div className="container">
        <LoginForm />
        <RegisterForm />
        <ResultMatches />
      </div>
    </Fragment>
  );
}

export default App;
