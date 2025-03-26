import React from "react";

function Contact() {
  return (
    <div style={style.container}>
      <div style={style.contentsection}>
        <p>Contact</p>
      </div>
    </div>
  );
}

const style = {
  
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh", 
        paddingTop:"10vh",
      },
  
  contentsection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%", 
    height: "60vh",
    padding: "20px",
    textAlign: "center",
  }
};

export default Contact;
