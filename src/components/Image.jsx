import React, { useState } from "react";
import { motion } from 'framer-motion';
import styles from "../components/Gallery.module.scss";
import Lightbox from "../components/Lightbox.jsx"

const Image = ({style, src, alt, Wrapper = 'div'}) => {
    const [ isOpen, setIsOpen ] = useState(false);
    
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <Wrapper className={style}>
            <Lightbox style={style} src={src} alt={alt}>
                <motion.div className={style}
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    whileHover={{scale:1.1, boxShadow: "0px 0px 8px rgba(0,0,0,0.3)"}}
                    whileTap={{scale:1.05}}
                    style={{cursor:"pointer"}}
                    >
                        <motion.img className={style} src={src} alt={alt} onClick={toggleIsOpen} style={{zIndex: '2'}}/>
                </motion.div>
            </Lightbox>
        </Wrapper>
    );
};

export default Image;