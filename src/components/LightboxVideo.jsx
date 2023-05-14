import styles from "../components/LightboxVideo.module.scss";
import { m, motion } from 'framer-motion';
import data from "../data/videos.json"
import React, { useState } from "react";

const Lightbox = ({ openImg, handleRotationRight, setOpenImg }) => {

    const [ zoom, enableZoom ] = useState(false);

    const handleClick = (e) => {
        if(e.target.classList.contains("dismiss")) {
            setOpenImg(null);
            enableScrolling();
        } else {
            if (screenSize > 500) { enableZoom(!zoom) }
            console.log(zoom);
        }
    };

    function enableScrolling() {
        window.onscroll = function () {}
    }

    if (typeof window !== "undefined") {
        var screenSize = window.innerWidth;
        console.log(screenSize);
      }

    const {link, height, width} = openImg;

    return (
        <motion.div className={styles.overlay} onClick={handleClick}>
            <iframe width={width} height={height} src={link} title="YouTube Video Player"
                allow="acclerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen />
            <span className="dismiss" onClick={handleClick} style={{cursor:"pointer"}}>X</span>
        </motion.div>
    );
};

export default Lightbox;