"use client"

import styles from "../styles/modules/navbar.module.scss"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeButton from "./buttons/ThemeSwitcher"

const links = [
    { href: "/", text: "Home"},
    { href: "/photography", text: "Photos"},
    { href: "/cinematography", text: "Films"},
    { href: "/resume", text: "Resume"},
    { href: "/music", text: "Music"}
]

const Navbar = ({}) => {
    const pathname = usePathname();
    return (
        <div className="flex items-center sticky top-[20px] z-[60]">
            <ul id="pages" className={`text-xl px-[36px] py-[12px] flex justify-center items-center gap-[36px] rounded-xl bg-white dark:bg-black ${styles.pages}`}>
                {links.map((l) => (
                    <li key={l.href}>
                        <Link href={l.href}>
                            <p className={pathname === l.href ? 'font-bold underline' : ''}>
                                {l.text}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
            <svg width="94" height="1" viewBox="0 0 94 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 1H93.5" stroke="black" strokeWidth="2"/>
            </svg>
            <div id="buttons" className="flex items-center gap-[8px]">
                <span className={`flex px-[24px] py-[5px] justify-center items-center gap-[10px] rounded-3xl bg-orange-300 dark:text-black ${styles.buttonBar}`}>Contact</span>
                <ThemeButton/>
            </div>
        </div>
    )
}

export default Navbar;