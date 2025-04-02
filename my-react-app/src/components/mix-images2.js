import React, { useState, useEffect } from "react";

function MixImages2({ largeImage, smallImageSrc1, smallImageSrc2, alt, interval = 3000 }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=> {
        const timer= setInterval(()=> {
            setCurrentIndex((prevIndex)=> (prevIndex + 1) % largeImage.length);
        }, interval);

    return () => clearInterval(timer);
}, [interval, largeImage.length]);


    return (
        <div style={styles.imageContainer}>
            <img src={largeImage[currentIndex]} alt={alt} style={styles.largeImage} />

            
            <div style={styles.smallImageContainer}>
                <img src={smallImageSrc1} alt={alt} style={styles.smallImage} />
                <img src={smallImageSrc2} alt={alt} style={styles.smallImage} />
            </div>
        </div>
    );
}

const styles = {
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        padding: "20px",
        gap: "20px", 
    },

    smallImageContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxHeight: "720px",
        width: "auto",
    },

    largeImage: {
        flex: 2,
        height: "auto",
        maxWidth:"800px",
        objectFit: "cover",
    },

    smallImage: {
        width: "400px",
        height: "auto",
        objectFit: "cover",
    },
};

export default MixImages2;
