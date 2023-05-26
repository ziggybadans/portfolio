"use client";

import { useState, useEffect } from "react";

import { Navbar } from "./navbar.tsx";
import Gallery from "../components/Gallery";
import GalleryVideo from "../components/GalleryVideo";
import DarkModeButton from "../components/buttons/DarkModeButton";
import LandingPage from "./LandingPage";
import ScrollToTopButton from "../components/buttons/ScrollToTopButton";

export default function Home() {
  const handleClick = (target) => {
    if (target === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleVisibility = () => {
    const darkButton = document.getElementById("darkButton");

    if (!darkButton) {
      return;
    }

    if (window.scrollY > 1000) {
      darkButton.style.visibility = "hidden";
    } else {
      darkButton.style.visibility = "visible";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
    <Navbar target="photography"/>
      <main>
        <LandingPage />

        <div
          id="photography"
          className="flex flex-col min-h-screen text-center"
        >
          <h1 className="text-6xl font-bold mt-12 mb-8">Photography</h1>
          <button
            onClick={() => handleClick("#home")}
            className="font-bold text-gray-600 mb-14"
          >
            Back
          </button>
          <div className="photography">
            <Gallery />
          </div>
        </div>

        <div
          id="cinematography"
          className="cinematography flex flex-col items-center min-h-screen pb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold mt-44 mb-8">
            Cinematography
          </h1>
          <button
            onClick={() => handleClick("#home")}
            className="font-bold text-gray-600 mb-14"
          >
            Back
          </button>
          <GalleryVideo></GalleryVideo>
        </div>
      </main>
      <div id="darkButton">
        <DarkModeButton className="fixed bottom-0 left-0 m-8" />
      </div>
      <ScrollToTopButton />
    </>
  );
}
