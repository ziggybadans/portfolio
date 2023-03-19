import React, { useState } from "react";
import { motion } from 'framer-motion';
import styles from "../components/Gallery.module.scss";
import Lightbox from "../components/Lightbox.jsx"

const Image = ({src, alt, Wrapper = 'div'}) => {
    const [ isOpen, setIsOpen ] = useState(false);
    
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <Wrapper>
            <Lightbox src={src} alt={alt} style={{zIndex: '3'}}>
                <motion.div className={styles.gridcontainer}
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    whileHover={{scale:1.1, boxShadow: "0px 0px 8px rgba(0,0,0,0.3)"}}
                    whileTap={{scale:1.05}}
                    style={{cursor:"pointer"}}
                    >
                        <motion.img className={styles.griditem} src={src} alt={alt} onClick={toggleIsOpen} style={{zIndex: '2'}}/>
                </motion.div>
            </Lightbox>
        </Wrapper>
    );
};

export default Image;