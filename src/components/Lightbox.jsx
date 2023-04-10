import styles from "../components/Lightbox.module.scss";
import { m, motion } from 'framer-motion';
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

    return (
        <motion.div className={styles.overlay} onClick={handleClick}>
            <motion.img src={openImg}
                animate={{ scale: zoom ? 2 : 1 }}
                transition={{ ease: "easeOut", duration: 0.0005}}
                style={{ cursor: zoom ? "zoom-out" : "zoom-in" }}/>
            <span className="dismiss" onClick={handleClick} style={{cursor:"pointer"}}>X</span>
        </motion.div>
    );
};

export default Lightbox;