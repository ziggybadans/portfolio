"use client"
import styles from "../../styles/Home.module.scss"
import Gallery from "../../components/Gallery"
import Navbar from "../../components/Navbar"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { IconContext } from "react-icons/lib"
import { LuChevronRight } from "react-icons/lu"
import { useEffect } from "react"

export default function Photos() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("rest");
    }, [controls]);

    // define variants
    const buttonVariants = {
        hover: {
            x: 10 // moves to right on hover
        },
        rest: {
            x: 0 // original position
        }
    }

    return (
        <main className={`flex flex-col items-center relative ${styles.main} dark:bg-[#050b0e] bg-[#fff8f3] transition-colors`}>
            <div className={`pt-[20px] flex flex-col items-center`}>
                <Navbar/>
            </div>
            <div className="mt-[25px] w-full items-center mix-blend-multiply dark:mix-blend-normal">
                    <Link href="/photography/band">
                        <motion.button
                        onHoverStart={() => controls.start("hover")}
                        onHoverEnd={() => controls.start("rest")}
                        whileHover={{ opacity: 0.75 }}
                        className={`absolute left-0 w-full h-[75px] text-2xl shadow-xl shadow-orange-50 dark:shadow-teal-950
                        bg-orange-200 dark:bg-teal-900 flex flex-row items-center justify-center gap-[6px]`}>
                            Band photography here
                            <motion.div>
                                <IconContext.Provider value={{ className: "shared-class", size: 24 }}>
                                    <motion.div animate={controls} variants={buttonVariants}>
                                        <LuChevronRight className="mt-[3px]"/>
                                    </motion.div>
                                </IconContext.Provider>
                            </motion.div>
                        </motion.button>
                    </Link>
                </div>
            <div id="title" className="pb-8 mt-[110px]">
                <h1 className="text-6xl font-bold">Photography</h1>
            </div>
            <Gallery/>
        </main>
    )
}