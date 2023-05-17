import * as React from "react";
import Head from 'next/head';
import Gallery from "../components/Gallery"
import GalleryVideo from "../components/GalleryVideo"
import DarkModeButton from "../components/DarkModeButton"
import LandingPage from "@/components/LandingPage";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home({ darkMode, setDarkMode }) {
  return (
    <div>
      <Head>
        <title>Ziggy Badans</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="justify-center min-h-screen relative">

        <LandingPage />

        <div id="photography" className="photography flex flex-col items-center min-h-screen">
          <h1 className="text-6xl font-bold mt-12 mb-8">Photography</h1>
          <button onClick={() => handleClick('#home')} className="font-bold text-gray-600 mb-14">Back</button>
          <Gallery></Gallery>
        </div>

        <div id="cinematography" className="cinematography flex flex-col items-center min-h-screen pb-16">
          <h1 className="text-6xl font-bold mt-44 mb-8">Cinematography</h1>
          <button onClick={() => handleClick('#home')} className="font-bold text-gray-600 mb-14">Back</button>
          <GalleryVideo></GalleryVideo>
        </div>

        <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode}/>
        <ScrollToTopButton darkMode={darkMode}/>
      </main>
    </div>
  );
}