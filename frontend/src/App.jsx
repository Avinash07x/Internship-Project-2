import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
    <div>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/passwordreset" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App;
