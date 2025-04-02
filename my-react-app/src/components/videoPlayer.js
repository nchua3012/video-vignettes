import React, {useState, useEffect, useRef} from "react";

function Videoplayer() {
    const[videos, setVideos] = useState([]);
    const[currentVideoIndex, setVideoIndex] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:3000/videos")
        .then(res => res.json())
        .then(data => setVideos(data))
        .catch(err => console.error("Error fetching video:", err));
    }, []);

    useEffect(() => {
        if (videoRef.current && videos.length > 0) {
            videoRef.current.src = `http://localhost:3000${videos[currentVideoIndex]}`;
            videoRef.current.play();
        }
    }, [currentVideoIndex,videos]);

    return (
        <div>
            {videos.length > 0 ? (
                <video ref={videoRef} controls autoPlay onEnded={() => setVideoIndex((prev) => (prev + 2) % videos.length)} />
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}

export default Videoplayer;
