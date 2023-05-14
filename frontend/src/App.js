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
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import VideoDisplay from "./components/VideoDisplay/VideoDisplay";

function App(props) {

  
  return (
    <div className="App">
      
      
      <Navbar />
      <SearchBar/>
      
      <Routes>
        
      {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <YouTubePage />
            </PrivateRoute>
          }
        /> */}
        <Route path="/" element={<YouTubePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search/:videoId" element={<SearchResultsPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
