import React, { useState } from "react";
import { m, motion } from 'framer-motion';

const Lightbox = ({children, style, src, alt, onClick}) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isOpenSmall, setIsOpenSmall ] = useState(false);

    function scroll() {
        var scrollDiv = document.getElementById("agent-div").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'})
    }

    function disableScrolling() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function() {
            window.scrollTo(x, y);
        };
    }

    function enableScrolling() {
        window.onscroll = function () {}
    }

    if (typeof window !== "undefined") {
        var screenSize = window.innerWidth;
      }


    const toggleIsOpen = () => {
        if (screenSize < 1000) {setIsOpenSmall(!isOpenSmall)};
        if (screenSize > 1000) {setIsOpen(!isOpen)};
        if (isOpen == false && screenSize > 1000) {scroll()};
        if (isOpen == false && screenSize > 1000) {disableScrolling()} else {enableScrolling()};
    };

    return (
        <motion.div Layout id="agent-div" className={style} onClick={toggleIsOpen}
            animate={{
                scale: isOpen ? 4.5 : 1,
                x: isOpen ? "160%" : "0%",
                y: isOpen ? "50%" : "0%",
                boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
                zIndex: isOpen ? "10" : "0"
            }}>
            {children}
            {isOpen &&
                <motion.div className="lightbox-container" onClick={toggleIsOpen} style={{
                    position: 'absolute',
                    display: 'flex',
                    top: '0',
                    left: '0',
                    height: '100vh',
                    width: '100vw',
                    background: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    zIndex: '1'
                }}
                animate={{
                    x: isOpen ? -100 : 0,
                    y: isOpen ? -100 : 0
                }}>
                </motion.div>
            }
        </motion.div>
    );
};

export default Lightbox;