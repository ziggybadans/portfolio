"use client";

import { Navbar } from "../navbar";

export default function News() {
  return (
      <div>
        <Navbar target="News" scroll={false}/>
        <main className="flex flex-col items-center min-h-screen mt-48">
          <h1 id="News" className="text-5xl font-bold mb-6">News</h1>
        </main>
      </div>
  );
}
