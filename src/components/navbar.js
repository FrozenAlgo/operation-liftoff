"use client";
import { spaceMono } from "@/lib/fonts";
import { Rocket, SettingsIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className={` w-[85%] ms-[7.5%] bg-slate-900/90 mt-8 rounded-full uppercase px-8 py-4 flex justify-between items-center border border-slate-700/50 ${spaceMono.className}`}
    >
      <div className="logo flex items-center gap-2 font-bold ">
        <div className="rounded-xl p-2 border border-cyan-800 bg-cyan-400/[0.04]  text-cyan-700/80">
          <Rocket />
        </div>
        <div className="h-min">
          <Link href="/">Operation Liftoff</Link>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-0 ring ring-slate-500/5  bg-slate-800  py-3   rounded-full text-sm">
          <li>
            <Link
              href="/dashboard"
              className={`px-5 py-3 transition-all duration-300 ease-in-out  ${
                pathname == "/dashboard" ? "bg-slate-700/35   rounded-full" : ""
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/schedule"
              className={`px-5 py-3 transition-all duration-300 ease-in-out ${
                pathname == "/dashboard/schedule"
                  ? "bg-slate-700/35 py-3 px-5 rounded-full"
                  : ""
              }`}
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/applications"
              className={`px-5 py-3 transition-all duration-300 ease-in-out ${
                pathname == "/dashboard/applications"
                  ? "bg-slate-700/35 py-3 px-5 rounded-full"
                  : ""
              }`}
            >
              Applications
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/goals"
              className={`px-5 py-3 transition-all duration-300 ease-in-out ${
                pathname == "/dashboard/goals"
                  ? "bg-slate-700/35 py-3 px-5 rounded-full"
                  : ""
              }`}
            >
              Goals
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/insights"
              className={`px-5 py-3 transition-all duration-300 ease-in-out ${
                pathname == "/dashboard/insights"
                  ? "bg-slate-700/35 py-3 px-5 rounded-full"
                  : ""
              }`}
            >
              Insight
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex items-center text-cyan-400/50 text-xs gap-1">
          <span className="text-xl animate-blink">•</span> Live
        </span>
        <Link
          href="/dashboard/settings"
          className="logo text-gray-400 p-2 border border-cyan-600/40 rounded-xl"
        >
          <SettingsIcon className="animate-spin [animation-duration:4s] hover:animate-none" />
        </Link>
      </div>
    </nav>
  );
}
