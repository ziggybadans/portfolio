import styles from "../components/Gallery.module.scss";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import data from "../data/images.json"
import Lightbox from "./Lightbox";

function Gallery() {

    const [ openImg, setOpenImg ] = useState(null);
    const [ currentIndex, setCurrentIndex ] = useState(null);
    var scrollingEnabled;

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setOpenImg(item.link);
        if (screenSize > 1000) {disableScrolling()} else {enableScrolling()};
    };

    const handleRotationRight = () => {
        const totalLength = data.data.length;
        if(currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data.data[0].link;
            setOpenImg(newUrl);
            return;
        }
        else {
            const newIndex = currentIndex + 1;
            const newUrl = data.data.filter((item) => {
                return data.data.indexOf(item) === newIndex;
            });
            const newItem = newUrl[0].link;
            setOpenImg(newItem);
            setCurrentIndex(newIndex);
        }
    }

    if (typeof window !== "undefined") {
        var screenSize = window.innerWidth;
      }

    function disableScrolling() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function() {
            window.scrollTo(x, y);
        };
        scrollingEnabled = false;
    }

    function enableScrolling() {
        window.onscroll = function () {}
        scrollingEnabled = true;
    }

    return (
        <div>
            <div className={styles.gallery}>
                {data.data.map((item, index) => (
                    <motion.div key={index} id={styles[item.size]}
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        whileHover={{scale:1.1, boxShadow: "0px 0px 8px rgba(0,0,0,0.3)"}}
                        whileTap={{scale:1.05}}
                        style={{cursor:"pointer"}}>
                            <img className={styles.griditem} id={styles[item.size]} src={item.link} alt={item.text} onClick={() => handleClick(item, index)}/>
                    </motion.div>
                ))}
            {openImg && <Lightbox openImg={openImg} handleRotationRight={handleRotationRight} setOpenImg={setOpenImg}/>}
            </div>
        </div>
    );
}

export default Gallery;