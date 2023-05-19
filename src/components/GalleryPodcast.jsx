import styles from "../styles/modules/GalleryPodcast.module.scss";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";

function GalleryPodcast({ jsonFile }) {
  const [images, setImages] = useState([]);
  const [openImg, setOpenImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [screenSize, setScreenSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const scrollingEnabled = useRef(true);

  useEffect(() => {
    fetch(jsonFile)
      .then(response => response.json())
      .then(data => setImages(data.data))
      .catch(error => console.error(error));
  }, [jsonFile]);

  const handleClick = useCallback(
    (item, index) => {
      setCurrentIndex(index);
      setOpenImg(item.link);
    }
  );

  return (
    <div>
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
            <img
              className={styles.griditem}
              id={styles[item.size]}
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, index)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPodcast;