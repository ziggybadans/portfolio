"use client";

import { Navbar } from "../navbar";
import AudioPlayer from "../../components/Player";

export default function AiRadio() {

  return (
      <div>
        <Navbar target="airadio"/>
        <main className="flex flex-col items-center min-h-screen">
          <h1 id="airadio" className="text-5xl font-bold mb-6 mt-16">AiRadio</h1>
          <AudioPlayer src="/AiRadio-Test1.mp3" />
        </main>
      </div>
  );
}
