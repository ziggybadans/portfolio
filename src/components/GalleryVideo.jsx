import styles from "../styles/modules/GalleryVideo.module.scss";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import data from "../data/videos.json";
import Lightbox from "./LightboxVideo";

function GalleryVideo() {
  const sortedVideos = data.data.sort((a, b) => b.date.localeCompare(a.date));

  const [openImg, setOpenImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [screenSize, setScreenSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const scrollingEnabled = useRef(true);

  const handleClick = useCallback(
    (item, index) => {
      setCurrentIndex(index);
      setOpenImg(item);
      if (screenSize > 1000) {
        disableScrolling();
      } else {
        enableScrolling();
      }
    },
    [screenSize]
  );

  const handleRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      setOpenImg(data.data[0]);
      return;
    } else {
      const newIndex = currentIndex + 1;
      const newUrl = data.data.filter((item) => {
        return data.data.indexOf(item) === newIndex;
      });
      setOpenImg(newUrl[0]);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
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

  function formatDate(dateStr) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    try {
      const date = new Date(dateStr);
      if (!isNaN(date.getTime())) {
        // check if date is valid
        return `${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`;
      }
    } catch (e) {
      console.error(e);
    }
    return dateStr;
  }

  return (
    <div>
      <div className={styles.gallery}>
        {sortedVideos.map((item, index) => (
          <motion.div
            className="p-4"
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
            <h3 className="text-3xl font-bold">{item.name}</h3>
            <p className="mb-3 ml-2 text-gray-500">{formatDate(item.date)}</p>
            <img
              className={styles.griditem}
              id={styles[item.size]}
              src={item.thumbnail}
              alt={item.name}
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

export default GalleryVideo;