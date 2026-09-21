"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mar 18", value: 18 },
  { name: "", value: 22 },
  { name: "", value: 61 },
  { name: "", value: 32 },
  { name: "", value: 43 },
  { name: "", value: 82 },
  { name: "", value: 35 },
  { name: "", value: 92 },
  { name: "", value: 90 },
  { name: "", value: 96 },
  { name: "Now", value: 100 },
];

export default function TrajectoryChart() {
  return (
    <div className="w-full rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-b-slate-800/80 py-4">
        <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400 ">
          Trajectory Signal
        </h3>
        <span className="text-xs text-gray-500">Last 30 Days</span>
      </div>

      {/* Chart */}
      <div className="h-52 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barCategoryGap="7%"
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.95} />
                <stop offset="100%" stopColor="#1e40af" stopOpacity={0.85} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#1e293b"
              strokeDasharray="0"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 16 }}
              interval="preserveStartEnd"
            />

            <YAxis hide domain={[0, 110]} />

            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#94a3b8" }}
              itemStyle={{ color: "#38bdf8" }}
            />

            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={100}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
