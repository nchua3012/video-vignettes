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
    padding: "20px",
    marginBottom: "20px", 
  },
  textSection: {
    flex: 1,  
    paddingRight: "20px", 
  },
  imageSection: {
    flex: 1,  
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "8px",
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
