import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/signup';
import NavBar from "./Component/js/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/home" element={<NavBar />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
