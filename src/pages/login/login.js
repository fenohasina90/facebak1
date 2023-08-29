import React, { useState } from "react";
import "./login.css";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) {
      setErrorMessage("Please fill in all the required fields.");
      return;
    }
    setErrorMessage("");

    const userData = {
      email,
      password,
    };
    try {
      const response = await fetch("http://127.0.0.1:8080/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Logged in successfully!");
        const url = "http://localhost:3000/home";
        window.location.href = url;
      } else {
        const errorData = await response.json();
        console.error("Error logging in:", errorData);
        throw new Error("Error logging in");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createAccount = async() =>{
    const link = "http://localhost:3000";
    window.location.href = link;
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebak</h3>
          <span className="loginDesc">
            Log in with your credentials.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form onSubmit={handleSubmit}>
              <input placeholder="Email" name="email" className="loginInput" />
              <input placeholder="Password" name="password" type="password" className="loginInput" />
              <button type="submit" className="loginButton">Log In</button>
              <button className="loginRegisterButton" onClick={createAccount}>Create an Account</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
