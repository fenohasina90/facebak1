import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/signup';
import NavBar from "./Component/js/NavBar";
import Main from "./Component/js/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home"
         element={ 
         <div>
            <NavBar />
            <Main />
        </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
