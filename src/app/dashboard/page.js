import MetricCard from "@/components/metricCard";
import Clock from "@/components/styleElements/clock";
import TrajectoryChart from "@/components/trajectoryChart";
import { orbitron, spaceMono } from "@/lib/fonts";
import {
  ArrowUpRight,
  CircleGauge,
  CircleSmall,
  Dot,
  Gauge,
  RadioTower,
  UserCircle2,
  Zap,
} from "lucide-react";
import Link from "next/link";
export default function DashboardPage() {
  const metricLog = [
    {
      heading: "launch readiness",
      icon: Gauge,
      main_text: "72%",
      sub_text: "-8% this week",
    },
    {
      heading: "Active Missions",
      icon: CircleGauge,
      main_text: "12",
      sub_text: "4 in motion",
    },
    {
      heading: "Days to target",
      icon: RadioTower,
      main_text: "47",
      sub_text: "June 01, 2026",
    },
  ];
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
  const applications = [
    {
      heading: "Northstar Labs",
      desc: "Product Designer",
      category: "Interview",
      time: "04:20PM",
    },
    {
      heading: "Orbit Systems",
      desc: "UX Engineer",
      category: "Applied",
      time: "06:20PM",
    },
    {
      heading: "Vector Finance",
      desc: "Design Lead",
      category: "Screening",
      time: "02:20PM",
    },
  ];
  return (
    <div className={`${spaceMono.className} text-gray-300`}>
      <header>
        <div className="flex items-center justify-between px-4  my-2">
          <h2
            className={`text-xl tracking-widest font-extrabold ${orbitron.className}`}
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
      </header>
      <main className="px-4">
        {/* page heading   */}
        <h4 className="text-[16px] uppercase text-cyan-400 pt-4">
          Mission Overview
        </h4>
        <h2 className={`text-4xl uppercase ${orbitron.className} pb-4`}>
          Command Center
        </h2>

        <div className="grid grid-cols-3 gap-5 uppercase my-4">
          {metricLog.map((metric, idx) => (
            <MetricCard
              key={idx}
              icon={metric.icon}
              heading={metric.heading}
              mainText={metric.main_text}
              subText={metric.sub_text}
            />
          ))}
        </div>
        <div className="my-4">
          <TrajectoryChart />
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
          <div className="bg-cyan-700/15 border border-cyan-700/30 rounded-xl p-4">
            <div className="text-cyan-300 flex items-center gap-1">
              <Zap size={18} /> Prioty One
            </div>
            <div>
              <h1 className={`${orbitron.className} text-2xl mt-4 `}>
                Prepare Northstar Interview
              </h1>
              <p className="my-4 text-sm">
                Review product teardown and rehearse your strongest outcome
              </p>
              <Link
                href="/"
                className="text-purple-800 flex items-center gap-1"
              >
                Open Mission <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

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
        <div className="w-full rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 my-5 ">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-b-slate-800/80 py-4 uppercase">
            <h3 className="text-xs font-medium  tracking-widest text-gray-400 ">
              Recent Applications
            </h3>
            <Link href="/" className="text-xs text-gray-500">
              View All
            </Link>
          </div>
          <ul>
            {applications.map((applications, idx) => {
              return (
                <li
                  key={idx}
                  className="flex justify-between border-b border-b-slate-800/80 py-4"
                >
                  <div>
                    <h3 className="text-lg">{applications.heading}</h3>
                    <p className="text-xs text-gray-400">{applications.desc}</p>
                  </div>
                  <div className="text-end text-xs">
                    <h6 className="text-cyan-700">{applications.category}</h6>
                    <p>{applications.time}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
