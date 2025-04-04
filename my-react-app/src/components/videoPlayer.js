import React, { useState, useEffect } from "react";

function Videoplayer() {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    console.log("Fetching video data...");

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
    <div>
      {videos.length > 0 ? (
        
        <video
          controls
          autoPlay
          onEnded={handleEnded}
          style={{ maxWidth: "60%", height: "auto" }}
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

export default Videoplayer;
