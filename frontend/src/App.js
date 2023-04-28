// General Imports
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { KEY } from "./localkey";


// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App(props) {
  
  return (
    <div>
      
      <Navbar />
      <Routes>
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              
            </PrivateRoute>
          }
        /> */}
        <Route exact path="/" element={<YouTubePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
