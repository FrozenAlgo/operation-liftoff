"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className=" w-[85%] ms-[7.5%] bg-[#1d1b21] mt-8 rounded-full px-8 py-4 flex justify-between items-center">
      <div className="logo flex items-center gap-3 font-bold ">
        <div>
          <Image
            src="/images/logo.png"
            className="rounded-2xl border border-white"
            alt="Logo"
            width={50}
            height={50}
          />
        </div>
        <div className="h-min">
          <Link href="/">Operation Liftoff</Link>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-10 ring ring-zinc-500/5  bg-[#25222b]  py-3   rounded-full">
          <li>
            <Link
              href="/dashboard"
              className={`px-5 py-3 transition-all duration-300 ease-in-out  ${
                pathname == "/dashboard"
                  ? "bg-purple-200/15   rounded-full"
                  : ""
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/applications"
              className={`px-5 py-3 transition-all duration-300 ease-in-out ${
                pathname == "/dashboard/applications"
                  ? "bg-purple-200/15 py-3 px-5 rounded-full"
                  : ""
              }`}
            >
              Applications
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/schedule"
              className={`px-5 py-3 transition-all duration-300 ease-in-out ${
                pathname == "/dashboard/schedule"
                  ? "bg-purple-200/15 py-3 px-5 rounded-full"
                  : ""
              }`}
            >
              Schedule
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo  flex items-center gap-3">
        <Link href="/" className="bg-purple-400/90 py-2 px-4  rounded-2xl">
          + Add Goal
        </Link>
        <Image
          className="rounded-full border-2 border-white"
          src="/images/profile.png"
          alt="Logo"
          width={50}
          height={50}
        />
      </div>
    </nav>
  );
}
