import styles from "../styles/Lightbox.module.scss";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Lightbox = ({ openImg, handleRotationRight, setOpenImg }) => {
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

  return (
    <motion.div className={styles.overlay} onClick={handleClick}>
      <motion.img
        src={openImg}
        animate={{ scale: zoom ? 2 : 1 }}
        transition={{ ease: "easeOut", duration: 0.00005 }}
        style={{ cursor: zoom ? "zoom-out" : "zoom-in" }}
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

export default Lightbox;
