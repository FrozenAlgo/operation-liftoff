import { motion } from "motion/react";
import Clock from "@/components/styleElements/clock";
import CornerDecoration from "./styleElements/cornerDecoration";
import { Michroma, Orbitron, Space_Mono } from "next/font/google";
import {
  ChevronRight,
  Lock,
  Radio,
  Rocket,
  Terminal,
  TextCursor,
  Layers,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  Dot,
  ArrowUpRight,
  GitBranch,
  LoaderCircle,
} from "lucide-react";

// const bootLogs = [
//   {
//     tone: "cyan",
//     label: "[CORE]",
//     text: "Initializing Next.js App Router...",
//     status: "OK",
//   },
//   {
//     tone: "purple",
//     label: "[UI]",
//     text: "Mounting Tailwind Glassmorphism Engine...",
//     status: "IN PROGRESS",
//   },
//   {
//     tone: "amber",
//     label: "[DATA]",
//     text: "Structuring Relational Database State...",
//     status: "PENDING",
//   },
//   {
//     tone: "muted",
//     label: "[BACKEND]",
//     text: "Python API Integration Sequence...",
//     status: "STANDBY",
//   },
// ];

const bootLogs = [
  // PHASE 1: What you are actively coding
  {
    tone: "cyan",
    label: "[CORE]",
    text: "Structuring Next.js App Router foundation...",
    status: "APPLIED",
  },
  {
    tone: "purple",
    label: "[UI]",
    text: "Practicing Tailwind CSS Glassmorphism...",
    status: "IN PROGRESS",
  },

  // PHASE 2: What you are currently figuring out
  {
    tone: "amber",
    label: "[AUTH]",
    text: "Studying OAuth 2.0 & JWT implementation...",
    status: "PROTOTYPING",
  },
  {
    tone: "amber",
    label: "[DATA]",
    text: "Exploring Supabase & Postgres integration...",
    status: "RESEARCHING",
  },

  // PHASE 3: The Python Curriculum
  {
    tone: "muted",
    label: "[BACKEND]",
    text: "Python FastAPI Backend Training Phase...",
    status: "QUEUED",
  },
  {
    tone: "muted",
    label: "[LOGIC]",
    text: "Learning Data Analytics Algorithm logic...",
    status: "QUEUED",
  },

  // PHASE 4: The Mobile Expansion
  {
    tone: "muted",
    label: "[MOBILE]",
    text: "Flutter Mobile Architecture Review...",
    status: "FUTURE MODULE",
  },
];

const toneColors = {
  cyan: "text-cyan-300",
  purple: "text-purple-300",
  amber: "text-amber-300",
  muted: "text-gray-600",
};

const architecturePhases = [
  {
    phase: "PHASE_01",
    subtitle: "FOUNDATION",
    title: "Phase 1: React UI Core.",
    icon: Layers,
    tone: "cyan",
    bullets: ["Next.js App Router", "Tailwind CSS", "Component Architecture"],
  },
  {
    phase: "PHASE_02",
    subtitle: "THE BRAIN",
    title: "Phase 2: Telemetry AI.",
    icon: BrainCircuit,
    tone: "purple",
    bullets: [
      "Python FastAPI Backend",
      "Local LLM Integration",
      "MySQL / Supabase",
    ],
  },
  {
    phase: "PHASE_03",
    subtitle: "SECURITY & STATE",
    title: "Phase 3: Auth Validation.",
    icon: ShieldCheck,
    tone: "amber",
    bullets: [
      "OAuth 2.0 Implementation",
      "JWT Session Management",
      "Middleware Route Protection",
    ],
  },
  {
    phase: "PHASE_04",
    subtitle: "LONG-RANGE",
    title: "Phase 4: Mobile & IoT.",
    icon: Smartphone,
    tone: "muted",
    bullets: [
      "Flutter Cross-Platform (Dart)",
      "Backend API Consumption",
      "Hardware Exploration (ESP32)",
    ],
  },
];
// 1. Initialize your specialty fonts just for this page

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});
export default function PreFLightUI() {
  return (
    <main className="min-h-screen w-full  flex items-center  bg-[#0a0a16] text-slate-100 selection:bg-cyan-400/20 selection:text-cyan-200   relative">
      <div className="bg-[radial-gradient(circle_at_15%_5%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(168,85,247,0.12),transparent_30%),linear-gradient(180deg,#0a0a16_0%,#0c0c1d_50%,#0a0a16_100%)] min-h-screen bg-fixed w-full">
        {/* top bar  */}
        <div
          className={`mt-5 text-gray-400 flex uppercase justify-between items-center w-full px-8 text-xs  ${spaceMono.className} pointer-events-none`}
        >
          <p className="text-cyan-400  flex items-center ">
            <span className="text-xl leading-none  animate-blink">•</span>
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

        <div
          className={`mt-5  flex uppercase justify-between items-center w-full px-8 text-xs   `}
        >
          <p
            className={` text-xl font-semibold flex items-center ${orbitron.className} `}
          >
            <Rocket className="me-3 text-cyan-400" />
            OPERATION LIFTOFF
          </p>

          <p className="flex items-center text-[12px] gap-2 font-extralight text-gray-500">
            <Lock size="16px" /> <span>Authorized Build Channel</span>
          </p>
        </div>
        <div className="mx-8 mt-5 h-[0.25px] bg-gray-500/80"></div>

        <section className="text-center flex flex-col gap-8 justify-center items-center mt-25 ">
          <p
            className={`text-cyan-300 bg-cyan-400/[0.04] border border-cyan-400 rounded-full  text-[12px] px-3 py-1.5 font-mono flex items-center gap-2 animate-blink uppercase ${spaceMono.className} `}
          >
            <Radio size="14px" className="" />
            Construction phase active
          </p>
          <h1
            className={`flex flex-col  uppercase tracking-widest text-7xl filter drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]  ${orbitron.className}`}
          >
            Pre - Flight{" "}
            <span className="text-cyan-300 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              Assembly{" "}
            </span>
          </h1>
          <p className="font-mono text-gray-400">
            Mission Control OS is currently under active engineering and
            construction.
          </p>
          <div
            className={`flex items-center gap-3 uppercase text-gray-600 text-[12px] ${spaceMono.className}`}
          >
            <div className="h-px w-20 bg-purple-700/50"></div>
            System architecture loading{" "}
            <LoaderCircle className="animate-spin text-cyan-200" />
            <div className="h-px w-20 bg-purple-700/50"></div>
          </div>
        </section>

        <div
          className={`px-8 mx-8 mt-25 mb-3 flex justify-between items-center uppercase text-[12px] ${spaceMono.className}`}
        >
          <div className={`flex me-8 items-center gap-1 text-gray-300 `}>
            <Terminal size="14px" className="text-cyan-300 animate-blink" />
            Live boot sequence
          </div>
          <div className=" flex items-center gap-2 text-gray-500 ">
            <span className="text-xl leading-none text-cyan-400   animate-blink">
              •
            </span>
            STREAM: CONNECTED
          </div>
        </div>

        <section className=" px-8 ">
          <div
            className={`border mx-8 border-white/10 px-4 bg-slate-900 rounded-2xl ${spaceMono.className}`}
          >
            <div className="flex items-center gap-2 text-[10px]  border-b border-white/10 text-gray-600  py-2 my-2 text-sm">
              <div className="h-2 w-2 bg-red-500 rounded-3xl"></div>
              <div className="h-2 w-2 bg-yellow-500 rounded-3xl"></div>
              <div className="h-2 w-2 bg-green-500 rounded-3xl"></div>
              preflight://assembly.log
            </div>
            <div className="my-5">
              {bootLogs.map((log) => (
                <div
                  key={log.label}
                  className="flex justify-between text-sm my-4 "
                >
                  <div>
                    <span className={`${toneColors[log.tone]} me-3`}>
                      {log.label}
                    </span>
                    <span>{log.text}</span>
                  </div>
                  <div className={`${toneColors[log.tone]}`}>{log.status}</div>
                </div>
              ))}
              <div className="flex items-center text-gray-600 text-sm ">
                <ChevronRight
                  className="text-purple-300  -mb-0.5"
                  size={14}
                  strokeWidth={2}
                />{" "}
                Awaiting final deployment authorization{" "}
                <TextCursor
                  className="text-cyan-300 animate-blink -mb-0.5 "
                  size={16}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 my-10">
          <div>
            <p className="uppercase text-cyan-300 text-[10px] my-3">
              System blueprint
            </p>
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold">Architecture specs</h3>
              <span className={`text-gray-600 text-sm ${spaceMono.className}`}>
                03 active phases
              </span>
            </div>
          </div>
          <div>
            {architecturePhases.map((phases, idx) => {
              const Icon = phases.icon;
              return (
                <div
                  key={idx}
                  className="border border-gray-500 bg-slate-700/20 hover:border-cyan-300/40 hover:bg-slate-700/30 my-6 p-4 rounded-xl "
                >
                  <div className="flex  justify-between text-xs text-gray-600">
                    <div
                      className={`${toneColors[phases.tone]} border w-max p-2 rounded-lg border-current bg-current/20`}
                    >
                      <Icon size={18} />
                    </div>
                    {phases.phase}
                  </div>
                  <p className="text-xs my-4 text-gray-600">
                    {phases.subtitle}
                  </p>
                  <h2 className="text-xl font-semibold">{phases.title}</h2>
                  <div className=" my-5 h-[0.25px] bg-gray-600/80"></div>
                  <ul>
                    {phases.bullets.map((points, idx) => {
                      return (
                        <li
                          key={idx}
                          className={`flex items-center text-xs text-gray-400 ${spaceMono.className}`}
                        >
                          <Dot className="text-cyan-300" />
                          {points}
                        </li>
                      );
                    })}
                  </ul>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-600 my-3 hover:text-cyan-300"
                  />
                </div>
              );
            })}
          </div>
        </section>
        <div
          className={`mb-2 text-gray-400 py-4 uppercase pointer-events-none   ${spaceMono.className} `}
        >
          <div className="w-full mb-2 h-0.5 bg-linear-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0"></div>
          <div className="flex justify-between items-center w-full px-8 text-xs">
            <p>DEPLOYEMENT TARGET : 10 / 2026</p>
            <p>Authorized Personnel Only</p>
            <p className="text-purple-700 animate-pulse flex items-center gap-2">
              <GitBranch size={14} /> SOURCE CHANNEL
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
