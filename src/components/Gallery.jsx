import styles from "../styles/modules/Gallery.module.scss";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";

function Gallery({ jsonFile }) {
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
      if (screenSize > 1000) {
        disableScrolling();
      } else {
        enableScrolling();
      }
    },
    [screenSize]
  );

  const handleRotationRight = () => {
    const totalLength = images.length;
    let newIndex = currentIndex + 1;
    if (newIndex >= totalLength) {
      newIndex = 0;
    }
    const newItem = images[newIndex].link;
    setOpenImg(newItem);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
    scrollingEnabled.current = false;
  }

  function enableScrolling() {
    window.onscroll = function () {};
    scrollingEnabled.current = true;
  }

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
        {openImg && (
          <Lightbox
            openImg={openImg}
            handleRotationRight={handleRotationRight}
            setOpenImg={setOpenImg}
          />
        )}
      </div>
    </div>
  );
}

export default Gallery;