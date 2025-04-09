import React from "react";
import ImageTextLayout2 from "../components/imageleft-textright";

function Contact() {

  const textContent = {
    heading: "Get in touch",
    paragraph: "Interested in collaborating or have a project in mind. Let’s connect on LinkedIn to discuss your requirements!",
  };

  return (
    <div style={style.container}>
      <div style={style.contentsection}>
        <ImageTextLayout2 
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
    paddingTop: "10vh",
  },
  contentsection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: "60vh",
    padding: "20px",
    textAlign: "left",
  }
};

export default Contact;

