import "./signup.css";
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
            setErrorMessage("Veuillez remplir tous les champs obligatoires.");
            return; 
          }
        setErrorMessage("") ;
        
        const userData = {
          email,
          password,
          confirmPassword,
          username,
        };
      };
      
    return (
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">Facebak</h3>
              <span className="loginDesc">
                Connect with friends and the world around you on Lamasocial.
              </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input placeholder="Email *" id="email" className="loginInput" />
                <input placeholder="Password * " id="password" className="loginInput" />
                <input placeholder="Confirm Password* " id="confirmPassword" className="loginInput" />
                <input placeholder="Username * " id="username" className="loginInput" />
                <button className="loginButton" id="submitSignUp" onClick={handleSubmit}>Sign Up</button>
                <button className="loginRegisterButton">
                  Log into Account
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
    
              </div>
            </div>
          </div>
        </div>
      );
}