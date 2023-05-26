"use client";

import Link from "next/link";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { usePathname } from "next/navigation";
import DarkModeButton from "../components/buttons/DarkModeButton";
import { useEffect, useState } from "react";
import styles from '../styles/modules/navbar.module.scss'

const links = [
  { href: "/photography", text: "Photography" },
  { href: "/cinematography", text: "Cinematography" },
  { href: "/resume", text: "Resume" },
];

const getScrollPosition = () => {
  return window.scrollY || document.documentElement.scrollTop;
};

export const Navbar = () => {
  const path = usePathname();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const targetElementOffset = document
      .getElementById("photography")
      .getBoundingClientRect().top;
    const onScroll = () => {
      setShowNav(getScrollPosition() > targetElementOffset);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navClass = showNav ? styles.navVisible : styles.navHidden;

  return (
        <nav className={`fixed flex justify-between items-center min-w-full z-50 bg-slate-50 text-gray-800 dark:bg-slate-950 dark:text-amber-50 drop-shadow-sm ${navClass}`}>
          <div className="flex w-full ml-10">
            <h3 className="text-3xl font-bold">Ziggy Badans</h3>
          </div>

          <div className="links">
            <ul className="flex justify-center items-center mx-auto">
              {links.map((l) => (
                <li className="pr-8" key={l.href}>
                  <motion.div whileHover={{ opacity: 0.5 }}>
                    <Link
                      className={`${
                        l.href === path ? "text-yellow-600 font-bold" : ""
                      } text-base`}
                      href={l.href}
                    >
                      {l.text}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div className="features scale-[0.65] mr-10">
            <DarkModeButton />
          </div>
        </nav>
  );
};
