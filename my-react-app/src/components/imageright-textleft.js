import React from 'react';

function ImageTextLayout1({ text, src, alt }) {
  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <h2 style={styles.heading}> {text.heading} </h2>
        <p style={styles.paragraph}> {text.paragraph} </p>
      </div>

      <div style={styles.imageSection}>
        <img src={src} alt={alt} style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "20px", 
  },
  textSection: {
    flex: 1,  
    paddingRight: "20px", 
    textAlign: "left",
  },
  imageSection: {
    flex: 1,  
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "800px",
    height: "auto",

  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "16px",
    color: "#555",
  }
};

export default ImageTextLayout1;
