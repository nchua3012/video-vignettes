import React from "react";
import '../App.css';

function Topnavbar ({onButtonClick}) {
  console.log("Topnavbar is being rendered");
    return <header style= {style.header}>
      <div style= {style.navbar} className="navbar">
        <button className= "button" onClick={() => onButtonClick("Home")}>Home</button>
        <div style= {style.rightButtons}>
        <button className= "button" onClick={() => onButtonClick("About Me")}>About Me</button>
        <button className= "button" onClick={() => onButtonClick("Projects")}>Projects</button>
        <button className= "button" onClick={() => onButtonClick("Contact")}>Contact</button>
        </div>
      </div>
    </header>
  }

  //CSS as JS elements

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
      width:"80%",
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
   
  }

export default Topnavbar