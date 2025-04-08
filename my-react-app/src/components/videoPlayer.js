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

  return (
    <div style={styles.videoContainer}>
      {videos.length > 0 ? (
        <video

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
      
    },
    video: {
      maxWidth: "60%",
      height: "auto",   
                     
    }
  };
  
  export default Videoplayer;
