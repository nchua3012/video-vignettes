import React from "react";
import ImageTextLayout1 from "../components/imageright-textleft";

function AboutMe() {

    const textContent = {
        heading: "About Me",
        paragraph: "Software developer with a background in architecture. Seven years of experience leading large-scale (£100M+) projects. Skilled in collaborating with multidisciplinary teams, with expertise in data management and utilizing advanced systems to support strategic planning. Applying an architect's lens to technology allows me to consider how different systems fit together, creating intuitive and functional designs that meet users' needs."
    };

  return (
    <div style={style.container}>
      <div style={style.contentsection}>
        <ImageTextLayout1
            text={textContent}
            src="https://placehold.co/800x800"
            alt="Placeholder Image"
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
    textAlign: "center",
  }
};

export default AboutMe;
