// import Navbar from "@/components/navbar";
import { StarfieldBackground } from "@/components/styleElements/starfieldBackground";
import Clock from "@/components/styleElements/clock";
import CornerDecoration from "@/components/styleElements/cornerDecoration";
import Link from "next/link";
import { Michroma, Orbitron, Space_Mono } from "next/font/google";
import { Rocket } from "lucide-react";

// 1. Initialize your specialty fonts just for this page

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "900",
});
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <main className=" min-h-screen font-sans bg-[url(/images/spacebg.png)] bg-center bg-cover  text-white flex items-center  justify-center  h-screen w-screen relative">
      {/* <StarfieldBackground /> */}
      {/* cornor decorations  */}
      <CornerDecoration corner="top-left" />
      <CornerDecoration corner="top-right" />
      <CornerDecoration corner="bottom-left" />
      <CornerDecoration corner="bottom-right" />
      {/* top text */}
      <div
        className={`absolute top-2 text-gray-400 flex uppercase justify-between items-center w-screen px-8 text-xs  ${spaceMono.className} pointer-events-none`}
      >
        <p className="text-cyan-400 font-semibold flex items-center ">
          <span className="text-xl leading-none  animate-pulse">•</span>
          System Nominal
        </p>

        <p>LAT 28.5729° N LON 80.6490° W PAD 39A</p>
        <p>
          MET
          <span className="mx-1">
            <Clock />
          </span>
          UTC
        </p>
      </div>
      {/* bottom text */}
      <div
        className={`absolute bottom-2 text-gray-400 uppercase pointer-events-none   ${spaceMono.className} `}
      >
        <div className="w-screen mb-2 h-0.5 bg-linear-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0"></div>
        <div className="flex justify-between items-center w-screen px-8 text-xs">
          <p>OPL // V 1 . 0 .0</p>
          <p>Authorized Personnel Only</p>
          <p className="text-purple-700 animate-pulse">Awaiting Credentials</p>
        </div>
      </div>

      {/* main form */}
      <div className="relative z-20 py-20 px-10  text-center bg-[#11183f]/70 shadow-xl border border-[#222c61] shadow-[#192253] rounded-2xl">
        {/* <Navbar /> */}

        <h1
          className={`text-3xl font-extrabold text-purple-800 mb-4 ${orbitron.className}`}
        >
          Operation Liftoff
        </h1>
        <p className="text-zinc-400 mb-4">Phase 1: React Dashboard Active</p>
        <div className="flex gap-2">
          <Link href="/login" className="bg-purple-900 py-2 px-4 rounded-full">
            Go to Login
          </Link>
          <Link
            href="/dashboard"
            className="bg-purple-900 py-2 px-4 rounded-full"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
