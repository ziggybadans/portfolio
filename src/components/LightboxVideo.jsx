import styles from "../styles/LightboxVideo.module.scss";
import { m, motion } from "framer-motion";
import React, { useState } from "react";

const LightboxVideo = ({ openImg, handleRotationRight, setOpenImg }) => {
  const [zoom, enableZoom] = useState(false);
  const [screenSize, setScreenSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleClick = (e) => {
    if (screenSize > 500) {
      enableZoom(!zoom);
    }
  };

  const handleClose = () => {
    setOpenImg(null);
    enableScrolling();
  };

  function enableScrolling() {
    window.onscroll = function () {};
  }

  const { link, height, width } = openImg;

  return (
    <motion.div className={styles.overlay} onClick={handleClick}>
      <iframe
        width={width}
        height={height}
        src={link}
        title="YouTube Video Player"
        allow="acclerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <span
        className="dismiss"
        onClick={handleClose}
        style={{ cursor: "pointer" }}
      >
        X
      </span>
    </motion.div>
  );
};

export default LightboxVideo;
