import MetricCard from "@/components/metricCard";
import { Briefcase } from "@deemlol/next-icons";
import { Layers } from "@deemlol/next-icons";
import { Code } from "@deemlol/next-icons";
export default function DashboardPage() {
  //   const title = "hello";
  const value = 87;
  const percentage = 31;
  return (
    <div>
      <div className="grid grid-cols-4  gap-4">
        <MetricCard
          icon={<Briefcase size={24} color="#a855f7" strokeWidth={1.5} />}
          title={"Active Funnel"}
          value={value}
          percentage={percentage}
        />
        <MetricCard
          icon={<Layers size={24} color="#a855f7" strokeWidth={1.5} />}
          title={"Agency Build"}
          value={value}
          percentage={percentage}
        />
        <MetricCard
          icon={<Code size={24} color="#a855f7" strokeWidth={1.5} />}
          title={"React UI"}
          value={value}
          percentage={percentage}
        />
        <MetricCard
          icon={<Code size={24} color="#a855f7" strokeWidth={1.5} />}
          title={"Mastery Tier"}
          value={value}
          percentage={percentage}
        />
      </div>
    </div>
  );
}
