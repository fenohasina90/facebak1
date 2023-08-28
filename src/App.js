import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/signup';
import NavBar from "./Component/js/NavBar";
import Main from "./Component/js/Main";
import Post from "./pages/posts/Post"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={ <div>
        <NavBar />
        <Main />
        <Post/>
      </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
