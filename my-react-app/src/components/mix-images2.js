import React from "react";

function MixImages2({ largeImageSrc, smallImageSrc1, smallImageSrc2, alt }) {
    return (
        <div style={styles.imageContainer}>
            <img src={largeImageSrc} alt={alt} style={styles.largeImage} />

            
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
        maxHeight: "800px",
        width: "auto",
    },

    largeImage: {
        flex: 2,
        width: "auto", 
        height: "100%",
        maxHeight:"800px",
        objectFit: "cover",
    },

    smallImage: {
        width: "auto",
        height: "400px",
        objectFit: "cover",
    },
};

export default MixImages2;
