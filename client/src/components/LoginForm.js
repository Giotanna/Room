import React, { Fragment, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //const [userData, setUserData] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordChange = (e) => {
    setShowPassword(e.target.checked);
  };

  const getUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const jsonData = await response.json();
        //setUserData(jsonData);                          **** keep data user logged in 
        console.log(jsonData);

      } else if (response.status === 401) {
        setErrorMessage("Invalid email or password");

      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      setErrorMessage("Login failed");
      console.log(error);
    }
  };
     

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(email, password);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log("Forgot password");
  };

  return (
    <form onSubmit={handleSubmit}>
       {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <div className="email-input">
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Κωδικός:
        </label>
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div>
          <input
            type="checkbox"
            id="show-password"
            checked={showPassword}
            onChange={handleShowPasswordChange}
          />
         
          <label htmlFor="show-password">Show Password</label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn">
        Σύνδεση
      </button>
      <div>
      <a href="#" onClick={handleForgotPassword}>
        Ξέχασες τον κωδικό σου;
      </a>
      </div>
    </form>

  );
};

export default LoginForm;
