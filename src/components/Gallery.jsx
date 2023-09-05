"use client";

import styles from "../styles/modules/Gallery.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/assets/images.json")
      .then((response) => response.json())
      .then((data) => setImages(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="relative inline-flex mb-8 gap-4">
        </div>
        <svg id="separator" xmlns="http://www.w3.org/2000/svg" width="1080" height="3" viewBox="0 0 2720 2" fill="none">
          <path d="M0 1H2720" stroke="#000000" stroke-opacity="1" stroke-width="1"/>
        </svg>
      </div>

      <div className={styles.gallerycontainer}>
        <div className={styles.gallery}>
          {images.map((item, index) => (
            <motion.div
              key={index}
              id={styles[item.size]}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 1.05 }}
              style={{ cursor: "pointer" }}
            >
              <Image
                className={styles.griditem}
                id={styles[item.size]}
                src={item.link}
                alt={item.text}
                width={item.width}
                height={item.height}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
