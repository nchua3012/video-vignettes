import React from "react";

function Footer() {
  return (
    <div style={style.container}>
      <div style={style.contentsection}>
        <p>2025</p>
      </div>
    </div>
  );
}

const style = {
  
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "2vh", 
      },
      
  contentsection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%", 
    textAlign: "center",
  }
};

export default Footer;
