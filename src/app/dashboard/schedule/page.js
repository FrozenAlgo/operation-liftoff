import Header from "@/components/header";
import Clock from "@/components/styleElements/clock";
import { orbitron, spaceMono } from "@/lib/fonts";
import { Plus, UserCircle2, Dot, CircleSmall } from "lucide-react";
import Link from "next/link";
const objectives = [
  {
    time: "08:30PM",
    heading: "Morning Briefing",
    desc: "Review objectives and launch conditions",
    dot: "blue",
  },
  {
    time: "08:30PM",
    heading: "Portfolio system pass",
    desc: "Review case studies signals and outcomes",
    dot: "blue",
  },
  {
    time: "08:30PM",
    heading: "Northstar lab interview",
    desc: "Recruiter screen • Video call",
    dot: "purple",
  },
  {
    time: "08:30PM",
    heading: "Morning Briefing",
    desc: "Review objectives and launch conditions",
    dot: "purple",
  },
];
export default function SchedulePage() {
  return (
    <div className={`${spaceMono.className} text-gray-300`}>
      <Header
        heading="Daily Schedule "
        subHeading="Operational Cadance"
        button={true}
        buttonText="Add Objective "
      />
      <main className="px-4 my-4">
        <div className="w-full rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 uppercase">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-b-slate-800/80 py-4">
            <h3 className="text-xs font-medium  tracking-widest text-gray-400 ">
              Today at a Glance
            </h3>
            <span className="text-xs text-gray-500">4 objectives</span>
          </div>
          <ul>
            {objectives.map((objective, idx) => {
              return (
                <li
                  key={idx}
                  className="flex border-b border-slate-800/80 py-4"
                >
                  {/* Time */}
                  <div className="w-20 shrink-0 text-sm text-slate-400">
                    {objective.time}
                  </div>

                  {/* Dot */}
                  <div className="w-8 shrink-0 flex items-center justify-center">
                    {objective.dot === "blue" && (
                      <Dot
                        size={24}
                        className="text-cyan-400"
                        fill="currentColor"
                      />
                    )}

                    {objective.dot === "purple" && (
                      <CircleSmall size={12} className="text-purple-500" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-xs">
                    <h6 className="text-base text-slate-200">
                      {objective.heading}
                    </h6>

                    <p className="text-xs text-slate-400">{objective.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 my-5 uppercase">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-b-slate-800/80 py-4">
            <h3 className="text-xs font-medium  tracking-widest text-gray-400 ">
              Next Critical Action
            </h3>
            <span className="text-xs text-gray-500">
              T-
              <Clock />
            </span>
          </div>
          {/* main */}
          <div className="bg-cyan-700/15 border text-center  border-cyan-700/30 rounded-xl p-4">
            <div className="bg-purple-600/30 border-purlple-700/30 rounded-full w-min">
              <h2>65%</h2>
              <p>Focus Load</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
