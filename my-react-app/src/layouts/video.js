import React from "react";
import Videoplayer from "../components/videoPlayer";

function VideoDisplay() {
    return (
        <div style={style.container}>
            <Videoplayer /> 
        </div>
    );
}


  
const style = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh", 
    },
};

export default VideoDisplay;
