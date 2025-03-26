import React from "react";
import ImageTextLayout1 from "../components/imageright-textleft";

function AboutMe() {

    const textContent = {
        heading: "About Me",
        paragraph: "This page is about me."
    };

  return (
    <div style={style.container}>
      <div style={style.contentsection}>
        <ImageTextLayout1
            text={textContent}
            src="https://via.placeholder.com/400"
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
    width: "80%", 
    height: "60vh",
    padding: "20px",
    textAlign: "center",
  }
};

export default AboutMe;
