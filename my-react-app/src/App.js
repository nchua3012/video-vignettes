import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topnavbar from "./components/topnavbar";
import AboutMe from "./layouts/aboutme";
import Contact from "./layouts/contact";
import Home from "./layouts/home";
import Projects from "./layouts/projects";
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
            <Route path="/" exact component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/projects" component={Projects} /> 
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
