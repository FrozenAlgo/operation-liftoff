import Header from "@/components/header";
import { spaceMono } from "@/lib/fonts";

export default function Goals() {
  return (
    <div className={`${spaceMono.className} text-gray-300`}>
      <Header
        heading="Career Tragectory "
        subHeading="Long range navigation"
        button={false}
        // buttonText=""
      />
      <main className="px-4"></main>
    </div>
  );
}
