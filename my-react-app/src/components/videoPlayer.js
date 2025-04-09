import React, { useState, useEffect } from "react";

function Videoplayer() {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    console.log("Fetching video data");

    fetch("/Video/video.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch videos, please try again later.");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Videos fetched successfully:", data);
        setVideos(data); 
      })
      .catch((err) => {
        console.error("Error fetching video:", err); 
      });
  }, []);

  const handleEnded = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length); 
  };

  const handleNext = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setVideoIndex((prevIndex) => (prevIndex - 1) % videos.length);
  };
  
  return (
    <div style={styles.videoContainer}>
      {videos.length > 0 ? (
        <div style={styles.videoWrapper}>

      <button style={styles.prevButton} onClick={handlePrev}>{"<<"}</button>
      <button style={styles.nextButton} onClick={handleNext}>{">>"}</button>

        <video
        key={currentVideoIndex}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        style={styles.video}
      >
      
          <source
            src={`${process.env.PUBLIC_URL}${videos[currentVideoIndex]}`}
            type="video/mp4"
        />

        </video>
      </div>

      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
}

const styles = {
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    paddingTop:"10vh"
  },
  videoWrapper: {
    position: "relative",
    maxWidth: "80%",
  },
  video: {
    width: "100%",
    height: "auto",
    display: "block",
    alignItems: "center",
  },
  prevButton: {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)", 
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    color: "gray",
    transition: "background-color 0.3s",
    zIndex: 10,    
  },
  nextButton: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    color: "gray",
    transition: "background-color 0.3s",
    zIndex: 10,    
  },
};
  
  export default Videoplayer;
