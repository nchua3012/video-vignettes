import React from "react";
import ImageTextLayout2 from "../components/imageleft-textright";

function Home() {

  const textContent = {
    heading: "Hi, I'm Nick Chua",
    paragraph: "This is the homepage.",
  };

  return (
    <div style={style.container}>
      <div style={style.contentsection}>
        <ImageTextLayout2 
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
    paddingTop: "10vh",
  },
  contentsection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "60vh",
    padding: "20px",
    textAlign: "left",
  }
};

export default Home;

