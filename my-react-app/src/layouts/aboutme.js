import React from "react";
import ImageTextLayout1 from "../components/imageright-textleft";

function AboutMe() {

    const textContent = {
        heading: "About",
        paragraph: "A curated series of short video clips that document moments of everyday life",
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
    paddingTop: "5vh"
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
