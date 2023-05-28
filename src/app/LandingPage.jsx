"use client";

import { useState, useContext } from "react";
import { ThemeContext } from "../interfaces/theme-context";
import { motion } from "framer-motion";
import Link from "next/link";

import { PageTransition } from "../interfaces/transitions/right-page";

import styles from "../styles/modules/LandingPage.module.scss";

const ScrollButton = ({ target, heading, children }) => {
  const handleScroll = (e) => {
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.getAttribute('href');
  
    if (!href.includes("/")) {
      e.preventDefault();
      // get the element by id and use scrollIntoView
      const elem = document.getElementById(href);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <button>
      <Link href={target} onClick={handleScroll} scroll={false}>
        <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-950">
          <h2 className="text-xl font-semibold mb-2">{heading}</h2>
          <p>{children}</p>
        </div>
      </Link>
    </button>
  );
};

export default function LandingPage() {
  const [ isHovered, setIsHovered ] = useState(false);
  const [ isAIHovered, setIsAIHovered ] = useState(false);
  const { currentTheme } = useContext(ThemeContext);

  const colour = currentTheme == "dark" ? "white" : "black";

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div id="header">
          <h1 className="text-5xl font-bold mb-6">Ziggy Badans</h1>
          <motion.svg
            className="absolute ml-56"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 50 50"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <line
              x1="15"
              y1="25"
              x2="44"
              y2="25"
              stroke={colour}
              strokeWidth="3"
            />
            <polyline
              points="35,15 45,25 35,35"
              stroke={colour}
              strokeWidth="3"
              fill="none"
            />
          </motion.svg>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex justify-center items-center cursor-pointer hover:text-gray-400 mb-8"
        >
          <Link href="/resume">
            <p className={`text-lg ${styles.pseudo} ${styles.resume}`}>View my resume</p>
          </Link>
        </div>

        <div className={styles.buttons}>
          <ScrollButton target="photography" heading="Photography">
            View my photography work.
          </ScrollButton>
          <ScrollButton target="cinematography" heading="Cinematography">
            View my cinematography work.
          </ScrollButton>
        </div>

        <div id="airadio">
          <motion.svg
            className="absolute mt-[8.1rem] ml-11"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 50 50"
            initial={{ opacity: 0 }}
            animate={{ opacity: isAIHovered ? 1 : 0, x: isAIHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <line
              x1="15"
              y1="25"
              x2="44"
              y2="25"
              stroke={colour}
              strokeWidth="3"
            />
            <polyline
              points="35,15 45,25 35,35"
              stroke={colour}
              strokeWidth="3"
              fill="none"
            />
          </motion.svg>
        </div>
        <div
          onMouseEnter={() => setIsAIHovered(true)}
          onMouseLeave={() => setIsAIHovered(false)}
          className="relative flex justify-center items-center cursor-pointer hover:text-gray-400 mb-8"
        >
          <Link href="/airadio">
            <p className={`text-2xl font-semibold absolute -right-11 mt-32 ${styles.pseudo}`}>AiRadio</p>
          </Link>
        </div>
        
      </div>
    </PageTransition>
  );
}
