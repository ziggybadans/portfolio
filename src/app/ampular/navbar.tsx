"use client"
import styles from "../../styles/modules/navbar_ampular.module.scss"
import Link from "next/link"
import { motion } from "framer-motion"

const links = [
    { href: "products", text: "Products" },
    { href: "/about", text: "About" }
];

export const Navbar = () => {
  return (
    <nav className="fixed min-w-full top-0 z-50 h-24 
    bg-slate-700 bg-opacity-25 
    border-b border-white border-opacity-20
    backdrop-blur-lg
    flex items-center justify-between">
      <div className={`text-white text-4xl font-normal relative left-14 ${styles.logo}`}>Ampular</div>

      <div className="links">
        <ul className="flex">
          {links.map((l) => (
            <li className={`pr-16 text-2xl text-indigo-100 ${styles.links}`} key={l.href}>
              <motion.div whileHover={{ opacity: 0.5 }}>
                <Link href={l.href}>
                  {l.text}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}