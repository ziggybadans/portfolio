"use client"

import styles from "../styles/modules/navbar.module.scss"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeButton from "./buttons/ThemeSwitcher"
import { motion } from "framer-motion"

const links = [
    { href: "/", text: "Home"},
    { href: "/photography", text: "Photos"},
    { href: "/cinematography", text: "Films"}
    //{ href: "/resume", text: "Resume"},
    //{ href: "/music", text: "Music"}
]

const Navbar = ({}) => {
    const pathname = usePathname();
    return (
        <div className="flex flex-col sm:flex-row items-center sticky top-[20px] z-[60]">
            <div className="flex sm:mb-0 mb-5">
                <ul id="pages" className={`text-xl px-[36px] py-[12px] flex justify-center items-center gap-[36px] rounded-xl bg-white dark:bg-black ${styles.pages}`}>
                    {links.map((l) => (
                        <li key={l.href}>
                            <motion.div whileHover={{ opacity: 0.5 }}>
                                <Link className="relative" href={l.href}>
                                    {l.href === pathname && (
                                        <motion.span layoutId="underline" className="absolute left-0 top-full block h-[1px] w-full bg-black dark:bg-white"/>
                                    )}
                                    {l.text}
                                </Link>
                            </motion.div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center">
                <div className="sm:w-[60px] border-b border-black dark:border-white sm:mx-5 "></div>
                <div id="buttons" className="flex items-center gap-[8px]">
                    <Link href="/contact">
                        <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex px-[24px] py-[5px] justify-center items-center gap-[10px]
                        rounded-3xl bg-orange-300 dark:text-black ${styles.buttonBar} 
                        ${pathname === "/contact" ? 'font-semibold underline' : ''}`}>
                            Contact
                        </motion.button>
                    </Link>
                    <motion.div                       
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                        <ThemeButton/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;