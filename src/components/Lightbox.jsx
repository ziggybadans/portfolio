"use client";

import styles from "../styles/modules/Lightbox.module.scss";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Lightbox = ({ openImg, handleRotation, setOpenImg }) => {
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
      <motion.div className={styles.overlay}>
        <motion.img onClick={handleClick}
          src={openImg}
          animate={{ scale: zoom ? 2 : 1 }}
          transition={{ ease: "easeOut", duration: 0.00005 }}
          style={{ cursor: zoom ? "zoom-out" : "zoom-in" }}
        />
        <svg className={styles.dismiss} onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <svg className={styles.right} onClick={() => handleRotation('right')} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
          <line x1="15" y1="25" x2="44" y2="25" stroke="white" strokeWidth="3"/>
          <polyline points="35,15 45,25 35,35" stroke="white" strokeWidth="3" fill="none" />
        </svg>
        <svg className={`${styles.left} transform rotate-180`} onClick={() => handleRotation('left')} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
          <line x1="15" y1="25" x2="44" y2="25" stroke="white" strokeWidth="3"/>
          <polyline points="35,15 45,25 35,35" stroke="white" strokeWidth="3" fill="none" />
        </svg>
      </motion.div>

  );
};

export default Lightbox;
