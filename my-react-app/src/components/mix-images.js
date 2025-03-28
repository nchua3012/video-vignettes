import React from "react";

function MixImages1({ largeImageSrc, smallImageSrc1, smallImageSrc2, alt }) {
    return (
    <div style= {styles.imageContainer}>
            <div style = {styles.largeImage}>
                <img src= {largeImageSrc} alt= {alt} style={styles.image} />
            </div>

        <div style= {styles.smallImageContainer}>
            <div style = {styles.smallImage}>
                <img src= {smallImageSrc1} alt= {alt} style={styles.image} />
            </div>

            <div style = {styles.smallImage}>
                <img src= {smallImageSrc2} alt= {alt} style={styles.image} />
            </div>
        </div>

    </div>    
    )
}

const styles = {
    imageContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "20px",
        gap:"20px,"
    },

    smallImageContainer: {
        display:"flex",
        flexDirection:"column",
        gap: "20px",
        padding: "20px",
    },

    largeImage: {
        flex: 2,
    },

    smallImage: {
    
    },


}

export default MixImages1