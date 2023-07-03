"use client";

import Link from "next/link";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { usePathname } from "next/navigation";
import DarkModeButton from "../components/buttons/DarkModeButton";
import { useEffect, useState } from "react";
import styles from "../styles/modules/navbar.module.scss";

const links = [
  { href: "photography", text: "Photography" },
  { href: "cinematography", text: "Cinematography" },
  { href: "/resume", text: "Resume" },
  { href: "/news", text: "News" },
];

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  // get the href and remove everything before the hash (#)
  const href = e.currentTarget.getAttribute("href");

  if (!href.includes("/")) {
    e.preventDefault();
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(href);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const getScrollPosition = () => {
  return window.scrollY || document.documentElement.scrollTop;
};

export const Navbar = ({ target, scroll }) => {
  console.log(target);
  const path = usePathname();
  const [showNav, setShowNav] = useState(!scroll);
  console.log("showNav: " + showNav);

  useEffect(() => {
    if (scroll) {
      const targetElementOffset = document
        .getElementById(target)
        .getBoundingClientRect().top;
      const onScroll = () => {
        setShowNav(getScrollPosition() > targetElementOffset);
      };

      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [target, scroll]);

  const navClass = scroll ? (showNav ? styles.navVisible : styles.navHidden) : styles.navVisible;

  return (
    <nav
      className={`fixed flex justify-between items-center min-w-full z-50 top-0 bg-slate-50 text-gray-800 dark:bg-slate-950 dark:text-amber-50 drop-shadow-sm ${navClass}`}
    >
      <div className="flex w-full ml-10">
        <Link href="/">
          <h3 className="text-3xl font-bold">Ziggy Badans</h3>
        </Link>
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
                  scroll={false}
                  href={l.href}
                  onClick={handleScroll}
                >
                  {l.text}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>

      <div className="features scale-[0.65] mr-10">
        <DarkModeButton className={undefined} />
      </div>
    </nav>
  );
};
