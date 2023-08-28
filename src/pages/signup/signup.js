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
            console.error("Erreur lors de l'insertion:", errorData);
            throw new Error("Erreur lors de l'insertion");
          }
        } catch (error) {
          console.error(error);
        }
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