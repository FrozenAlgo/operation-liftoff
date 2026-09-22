import Header from "@/components/header";
import Clock from "@/components/styleElements/clock";
import { orbitron, spaceMono } from "@/lib/fonts";
import {
  BriefcaseBusiness,
  CalendarClock,
  CircleSmall,
  Plus,
  ScrollText,
  TrendingDown,
  TrendingUp,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";
const applications = [
  {
    company: "Contour Software",
    role: "Fresh Grad Trainee",
    status: "Applied",
    statusColor: "text-cyan-400",
    time: "Today",
    note: "Email + portal",
  },
  {
    company: "Systems Limited",
    role: "Management Trainee",
    status: "Applied",
    statusColor: "text-cyan-400",
    time: "Today",
    note: "Direct email",
  },
  {
    company: "Emumba",
    role: "Internship / Junior",
    status: "Applied",
    statusColor: "text-cyan-400",
    time: "Today",
    note: "Email sent",
  },
  {
    company: "Arbisoft",
    role: "Fresh Graduate",
    status: "Applied",
    statusColor: "text-cyan-400",
    time: "Today",
    note: "Fresh-grad pipeline",
  },
  {
    company: "APIMatic",
    role: "Junior Software Engineer",
    status: "Pending",
    statusColor: "text-amber-400",
    time: "—",
    note: "Portal application",
  },
  {
    company: "VisionRD",
    role: "Software / AI Intern",
    status: "Pending",
    statusColor: "text-amber-400",
    time: "—",
    note: "Careers / LinkedIn",
  },
];
const applicationResponse = 47;
export default function ApplicationPage() {
  return (
    <div className={`${spaceMono.className} text-gray-300`}>
      <Header
        heading="Applications "
        subHeading="Pipeline Telemetery"
        button={true}
        buttonText="New Application"
      />

      <main className="px-4">
        {/* Header */}

        <div className="my-4">
          <div className="flex items-center justify-between px-2">
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
              Mission log · outreach tracker
            </p>
            <span className="text-xs text-cyan-500/80">
              {applications.length} tracked
            </span>
          </div>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <p className="text-[12px] uppercase text-gray-500 tracking-wider">
                Applied
              </p>
              <BriefcaseBusiness size={18} className="text-cyan-700" />
            </div>
            <p className={`text-3xl font-bold mt-1 ${orbitron.className}`}>
              {applications.filter((a) => a.status === "Applied").length}
            </p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <p className="text-[12px] uppercase text-gray-500 tracking-wider">
                Pending
              </p>
              <CalendarClock size={18} className="text-cyan-700" />
            </div>
            <p className={`text-3xl font-bold mt-1 ${orbitron.className}`}>
              {applications.filter((a) => a.status === "Pending").length}
            </p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <p className="text-[12px] uppercase text-gray-500 tracking-wider">
                Response Rate
              </p>
              {applicationResponse >= 40 ? (
                <TrendingUp size={18} className="text-green-500" />
              ) : (
                <TrendingDown size={18} className="text-red-500" />
              )}
            </div>
            <p className={`text-3xl font-bold mt-1 ${orbitron.className}`}>
              {applicationResponse}%
            </p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <p className="text-[12px] uppercase text-gray-500 tracking-wider">
                Total
              </p>
              <ScrollText size={18} className="text-cyan-700" />
            </div>
            <p className={`text-3xl font-bold mt-1 ${orbitron.className}`}>
              {applications.length}
            </p>
          </div>
        </div>

        <div className="rounded-2xl my-4 border border-slate-800/80 bg-slate-900/60 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-slate-800/80 uppercase flex items-center justify-between">
            <h3 className="text-xs font-medium tracking-widest text-gray-400">
              Active Pipeline
            </h3>

            <p className="text-[10px] text-gray-500 tracking-widest">
              Sorted by latest activity
            </p>
          </div>

          {/* Table */}
          <div className="px-4">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-slate-800/80">
                  <th className="py-5 text-[10px] uppercase tracking-widest text-gray-500">
                    Company
                  </th>

                  <th className="py-5 text-[10px] uppercase tracking-widest text-gray-500">
                    Role
                  </th>

                  <th className="py-5 text-[10px] uppercase tracking-widest text-gray-500">
                    Status
                  </th>

                  <th className="py-5 text-[10px] uppercase tracking-widest text-gray-500">
                    Updated
                  </th>

                  <th className="py-5"></th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-slate-800/80">
                  <td className="py-5 text-sm text-slate-200">
                    Northstar Labs
                  </td>

                  <td className="py-5 text-sm text-slate-400">
                    Product Designer
                  </td>

                  <td className="py-5">
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-[10px] text-purple-400">
                      INTERVIEW
                    </span>
                  </td>

                  <td className="py-5 text-xs text-slate-400">04.18</td>

                  <td className="py-5 text-right">
                    <button className="text-xs text-cyan-400 hover:text-cyan-300">
                      INSPECT&nbsp; →
                    </button>
                  </td>
                </tr>

                <tr className="border-b border-slate-800/80">
                  <td className="py-5 text-sm text-slate-200">Orbit Systems</td>

                  <td className="py-5 text-sm text-slate-400">UX Engineer</td>

                  <td className="py-5">
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-[10px] text-purple-400">
                      APPLIED
                    </span>
                  </td>

                  <td className="py-5 text-xs text-slate-400">04.16</td>

                  <td className="py-5 text-right">
                    <button className="text-xs text-cyan-400 hover:text-cyan-300">
                      INSPECT&nbsp; →
                    </button>
                  </td>
                </tr>

                <tr className="border-b border-slate-800/80">
                  <td className="py-5 text-sm text-slate-200">
                    Vector Finance
                  </td>

                  <td className="py-5 text-sm text-slate-400">Design Lead</td>

                  <td className="py-5">
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-[10px] text-purple-400">
                      SCREENING
                    </span>
                  </td>

                  <td className="py-5 text-xs text-slate-400">04.14</td>

                  <td className="py-5 text-right">
                    <button className="text-xs text-cyan-400 hover:text-cyan-300">
                      INSPECT&nbsp; →
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="py-5 text-sm text-slate-200">Axiom Health</td>

                  <td className="py-5 text-sm text-slate-400">
                    Product Designer
                  </td>

                  <td className="py-5">
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-[10px] text-purple-400">
                      SAVED
                    </span>
                  </td>

                  <td className="py-5 text-xs text-slate-400">04.12</td>

                  <td className="py-5 text-right">
                    <button className="text-xs text-cyan-400 hover:text-cyan-300">
                      INSPECT&nbsp; →
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* List */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-800/80 flex items-center justify-between">
            <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400">
              Recent Applications
            </h3>
          </div>

          <ul>
            {applications.map((app, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between px-5 py-4 border-b border-slate-800/60 last:border-b-0 hover:bg-slate-800/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CircleSmall
                    className={`mt-1 ${app.statusColor}`}
                    size={14}
                  />
                  <div>
                    <h4 className="text-sm text-slate-200">{app.company}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{app.role}</p>
                    <p className="text-[10px] text-gray-600 mt-1">{app.note}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className={`text-xs font-medium ${app.statusColor}`}>
                    {app.status}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1">{app.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
