export default function MetricCard({ icon, title, value, percentage }) {
  return (
    <div className=" bg-[#1d1b21]/70 rounded-3xl p-4 border border-zinc-700 shadow-md shadow-zinc-300/20">
      <div className="text-zinc-400 font-bold flex justify-between">
        {title}
        {icon}
      </div>
      <div>{value}</div>
      <div>{percentage}</div>
    </div>
  );
}
