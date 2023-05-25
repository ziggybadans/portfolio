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
  const [filter, setFilter] = useState("all")
  const filters = ["all", "nature", "wildlife", "architecture", "sky", "portrait", "landscape", "bands", "abstract", "cars"]

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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredImages = () => {
    if (filter === "all") {
      return images;
    } else {
      return images.filter((image) => image.tags.includes(filter));
    }
  };

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
        <div className="flex justify-center items-center mb-10">
        <div className="relative inline-flex">
          <select className="bg-white dark:bg-black appearance-none rounded-full p-2 pl-3 pr-10" value={filter} onChange={handleFilterChange}>
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4 transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7.05 11.293l3.591-3.909a.697.697 0 0 1 1.041 0l3.909 3.909a.802.802 0 0 1 0 1.114.776.776 0 0 1-1.114 0l-3.272-3.576-3.27 3.576a.776.776 0 0 1-1.114 0 .802.802 0 0 1 0-1.114z" />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.gallery}>
        {getFilteredImages().map((item, index) => (
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