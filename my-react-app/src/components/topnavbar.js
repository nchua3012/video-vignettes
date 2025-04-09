import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function Topnavbar() {
  console.log("Topnavbar is being rendered");

  return (
    <header style={style.header}>
      <div style={style.navbar} className="navbar">

        <Link to="/" style={style.link} className="button">Vignettes</Link>

        <div style={style.rightButtons}>
          <Link to="/about" style={style.link} className="button">About</Link>
          <Link to="/contact" style={style.link} className="button">Contact</Link>
        </div>
      </div>
    </header>
  );
}

// CSS as JS elements
const style = {
  header: {
    padding: "20px",
    position: "fixed",
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "0",
    zIndex: "1000",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    borderBottom: "1px solid #ccc",
  },
  home: {
    display: "flex",
    justifyContent: "flex-start",
  },
  rightButtons: {
    display: "flex",
    justifyContent: "flex-end", 
    gap: "15px",
  },
  link: {
    textDecoration: "none",  
    color: "inherit", 
  },
};

export default Topnavbar;
