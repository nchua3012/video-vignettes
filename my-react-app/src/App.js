import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topnavbar from "./components/topnavbar";
import AboutMe from "./layouts/aboutme";
import Contact from "./layouts/contact";
import Home from "./layouts/home";
import Projects from "./layouts/projects";
import VideoDisplay from "./layouts/video";
import Footer from "./footer";
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Topnavbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/video" element={<VideoDisplay />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
