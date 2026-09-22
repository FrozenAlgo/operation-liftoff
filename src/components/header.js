import Clock from "@/components/styleElements/clock";
import { orbitron, spaceMono } from "@/lib/fonts";
import { Plus, UserCircle2 } from "lucide-react";
import Link from "next/link";
export default function Header({ heading, subHeading, button, buttonText }) {
  return (
    <header>
      <div className="flex items-center justify-between px-4  my-2">
        <h2
          className={`text-lg tracking-widest font-extrabold ${orbitron.className}`}
        >
          OPERATION LIFTOFF
        </h2>
        <UserCircle2 className="text-gray-400" />
      </div>
      <div
        className={`my-4 text-gray-400 md:flex uppercase justify-between items-center w-full px-4 text-[10px] md:text-xs   pointer-events-none`}
      >
        <p className="text-cyan-400 mb-3 md:mb-0  flex items-center ">
          <span className="text-xl leading-none me-1  animate-blink">•</span>
          Live Mission Telemetry
        </p>

        <p>
          MET
          <span className="mx-1">
            <Clock />
          </span>
          UTC
          <span className="text-purple-300 ms-2">- PREFLIGHT</span>
        </p>
      </div>
      <div className=" w-full px-4 my-2">
        <div className="bg-gray-600  h-px  w-full"></div>
      </div>

      <div className="px-4">
        <h4 className="text-[12px] uppercase text-cyan-400 pt-4 pb-2">
          {subHeading}
        </h4>
        <div className="flex justify-between items-center">
          <h2
            className={`text-3xl uppercase tracking-widest font-extrabold ${orbitron.className} pb-4`}
          >
            {heading}
          </h2>
          {button ? (
            <Link
              href="/"
              className="py-2 px-5 border border-cyan-700 bg-cyan-700/30 flex items-center gap-1 rounded-xl text-sm"
            >
              <Plus size={16} /> {buttonText}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
}
