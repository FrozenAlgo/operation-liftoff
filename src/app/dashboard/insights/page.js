import Header from "@/components/header";
import { spaceMono } from "@/lib/fonts";

export default function Insights() {
  return (
    <div className={`${spaceMono.className} text-gray-300`}>
      <Header
        heading="Insights"
        subHeading="AI mission analyses"
        button={false}
        // buttonText=""
      />
      <main className="px-4"></main>
    </div>
  );
}
