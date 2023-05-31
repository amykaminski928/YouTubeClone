// General Imports
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { AuthProvider } from "./context/AuthContext";


function App() {
  const [searchTerm, setSearchTerm] = useState("Polyvagal Exercises");
  const navigate = useNavigate();

  const onSearch = (term) => {
    setSearchTerm(term);
    navigate("/")
  }
  
  return (
    <AuthProvider>
      
      
    <div className="App">
      
      
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<SearchResultsPage searchTerm={searchTerm} onSearch={onSearch} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:videoId/" element={<YouTubePage searchTerm={searchTerm} onSearch={onSearch}/>} />
       
      </Routes>
      
      <Footer />
      
    </div>
   
   
    </AuthProvider>
  );
}

export default App;
