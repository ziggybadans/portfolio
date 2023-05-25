'use client';

import Gallery from "../components/Gallery";
import GalleryVideo from "../components/GalleryVideo";
import DarkModeButton from "../components/DarkModeButton";
import LandingPage from "../components/LandingPage";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home(darkMode, setDarkMode) {
  const handleClick = (target) => {
    if (target === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <main >
        <LandingPage />

        <div
          id="photography"
          className="photography flex flex-col items-center min-h-screen"
        >
          <h1 className="text-6xl font-bold mt-12 mb-8">Photography</h1>
          <button
            onClick={() => handleClick("#home")}
            className="font-bold text-gray-600 mb-14"
          >
            Back
          </button>
          <Gallery/>
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
      <DarkModeButton/>
      <ScrollToTopButton darkMode={darkMode} />
    </div>
  );
}
