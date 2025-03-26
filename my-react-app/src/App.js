//This is the parent

import React, {useState} from "react";
import Topnavbar from "./components/topnavbar";
import AboutMe from "./layouts/aboutme";
import Contact from "./layouts/contact";
import Home from "./layouts/home";
import Projects from "./layouts/projects";
import Footer from "./footer";
import './App.css';
import './index.css';

function App() {

  const [currentSection, setCurrentSection] = useState("Home");

  const handleButtonClick = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case "Home":
        return <Home />;
      case "About Me":
        return <AboutMe />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="container">
      <Topnavbar onButtonClick={handleButtonClick} />
      <div className="content">
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
