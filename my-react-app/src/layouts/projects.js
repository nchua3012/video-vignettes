import React from "react";
import MixImages1 from "../components/mix-images";

function Projects() {
  return (
    <div style={style.container}>
      <div style={style.contentsection}>
        <MixImages1 
          largeImageSrc=""
          smallImageSrc1=""
          smallImageSrc2=""
          alt="WIP"
        />
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

export default Projects;
