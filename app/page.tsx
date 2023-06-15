"use client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1
      className={`${inter.className} md:text-5xl text-xl font-medium md:py-5 text-slate-600 text-center tracking-wide`}
    >
      Example of Parallel Routing [Next.js]
    </h1>
  );
}
