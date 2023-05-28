"use client";

import { Navbar } from "../navbar";

export default function Resume() {
  return (
      <div>
        <Navbar target="resume"/>
        <main className="flex flex-col items-center justify-center min-h-screen">
          <h1 id="resume" className="text-5xl font-bold mb-6">Resume</h1>
        </main>
      </div>
  );
}
