import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topnavbar from "./components/topnavbar";
import AboutMe from "./layouts/aboutme";
import Contact from "./layouts/contact";
import VideoDisplay from "./layouts/video";
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Topnavbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<VideoDisplay />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
