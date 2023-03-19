import React, { useState } from "react";
import styles from "../components/Gallery.module.scss";
import { motion } from 'framer-motion';

const Lightbox = ({children, src, alt, Wrapper = 'div'}) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Wrapper onClick={toggleIsOpen}>
            {children}
            {isOpen ?
                <motion.div onClick={toggleIsOpen} className={styles.gridcontainer} initial={{opacity:0}} whileInView={{opacity:1}}/>    
            : null}
        </Wrapper>
    );
};

export default Lightbox;