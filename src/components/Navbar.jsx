"use client"

import styles from "../styles/modules/navbar.module.scss"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
            <ul id="pages" className={`text-xl px-[36px] py-[12px] flex justify-center items-center gap-[36px] rounded-xl bg-white ${styles.pages}`}>
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
            <div id="buttons" className="flex items-center gap-[6px]">
                <span className={`flex px-[24px] py-[5px] justify-center items-center gap-[10px] rounded-3xl bg-orange-300 ${styles.buttonBar}`}>Contact</span>
                <span className={`flex px-[5px] py-[5px] justify-center items-center gap-[10px] rounded-3xl ${styles.colourButton}`}>
                    <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="moon">
                        <path id="Vector" d="M43.3752 26.6129C43.054 30.0883 41.7497 33.4002 39.6149 36.1614C37.4801 38.9225 34.6031 41.0185 31.3206 42.2042C28.038 43.3899 24.4856 43.6162 21.0791 42.8566C17.6727 42.097 14.5529 40.383 12.085 37.9151C9.61714 35.4472 7.90312 32.3275 7.14356 28.921C6.38399 25.5145 6.61029 21.9622 7.79598 18.6796C8.98166 15.397 11.0777 12.52 13.8388 10.3852C16.5999 8.25045 19.9119 6.94617 23.3872 6.625C21.3526 9.37771 20.3734 12.7693 20.628 16.1829C20.8826 19.5965 22.3539 22.8053 24.7744 25.2258C27.1948 27.6463 30.4037 29.1176 33.8173 29.3722C37.2309 29.6267 40.6225 28.6476 43.3752 26.6129Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default Navbar;