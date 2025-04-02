import React from "react";
import MixImages2 from "../components/mix-images2";
import image1 from "../Assets/square-image-1.png"
import image2 from "../Assets/square-image-2.jpg"
import image3 from "../Assets/square-image-3.png"
import image4 from "../Assets/square-image-4.png"
import image5 from "../Assets/square-image-5.png"
import image6 from "../Assets/square-image-6.png"

function Projects() {
  return (
    <div style={style.container}>
      <div style={style.contentsection}>
        <MixImages2 
          largeImage={[image1, image2, image3, image4, image5, image5, image6]}
          smallImageSrc1="https://placehold.co/400x350"
          smallImageSrc2="https://placehold.co/400x350"
          alt="WIP"
          interval={3000}
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
