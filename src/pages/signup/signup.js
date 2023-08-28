import "./signup.css";
import React from "react";
import { useState } from "react";
export default function Signup() {
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const username = document.getElementById("username").value;

      
        if (!email || !password || !confirmPassword|| !username) {   
            setErrorMessage("Please fill in all forms.");
            return; 
          }
        setErrorMessage("") ;
        
        const userData = {
          email,
          password,
          confirmPassword,
          username,
        };
        try {
          const response = await fetch("http://127.0.0.1:8080/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
    
          if (response.ok) {
            alert("Inserted successfully");
          } else {
            const errorData = await response.json(); // Convert response body to JSON
            console.error("Error during insertion:", errorData);
            throw new Error("Error during insertion");
          }
        } catch (error) {
          console.error(error);
        }
      };

    const Signing = async() => {
      const link = "http://localhost:3000/login";
      window.location.href = link;
    }
    return (
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">Facebak</h3>
              <span className="loginDesc">
              Dive into a world of possibilities and discover new horizons as you connect with your loved ones and the vast world around you.
              </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input placeholder="Email " id="email" className="loginInput" />
                <input type="password" placeholder="Password  " id="password" className="loginInput" />
                <input type="password"  placeholder="Confirm Password " id="confirmPassword" className="loginInput" />
                <input placeholder="Username  " id="username" className="loginInput" />
                <button className="loginButton" id="submitSignUp" onClick={handleSubmit}>Sign Up</button>
                <button className="loginRegisterButton" onClick={Signing}>
                  Log into Account
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      );
}