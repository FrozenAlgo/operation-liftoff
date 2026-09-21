import { orbitron } from "@/lib/fonts";

export default function MetricCard({ heading, mainText, subText, icon: Icon }) {
  return (
    <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80">
      <div className="flex text-gray-600 items-center justify-between">
        <h6 className="text-xs uppercase tracking-wider">{heading}</h6>
        {Icon && <Icon className="text-cyan-700" size={20} />}
      </div>

      <h1
        className={`${orbitron.className} text-4xl md:text-5xl my-3 font-bold`}
      >
        {mainText}
      </h1>

      <p className="text-cyan-700 text-sm">{subText}</p>
    </div>
  );
}
