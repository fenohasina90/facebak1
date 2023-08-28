import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/signup';
import NavBar from "./Component/js/NavBar";
import Main from "./Component/js/Main";
import Post from "./pages/posts/Post";
import Login from "./pages/login/login";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={ <div>
        <NavBar />
        <Main />
        <Post/>
      </div>} />
      </Routes>
    </BrowserRouter>);
}

export default App;
