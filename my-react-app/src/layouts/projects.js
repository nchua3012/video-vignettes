import React from "react";
import MixImages1 from "../components/mix-images";

function Projects() {
  return (
    <div style={style.container}>
      <div style={style.contentsection}>
        <MixImages1 
          largeImageSrc="https://placehold.co/1200x1200"
          smallImageSrc1="https://placehold.co/400x400"
          smallImageSrc2="https://placehold.co/400x400"
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
    width: "60%", 
    height: "60vh",
    padding: "20px",
  }
};

export default Projects;
