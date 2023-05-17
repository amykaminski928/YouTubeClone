// General Imports
import { Routes, Route, Link, Router } from "react-router-dom";
import "./App.css";



// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";




function App(props) {

  
  return (
    <div className="App">
      
      
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<SearchResultsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:videoId" element={<YouTubePage />} />
       
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
