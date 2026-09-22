import Header from "@/components/header";
import { spaceMono } from "@/lib/fonts";

export default function Settings() {
  return (
    <div className={`${spaceMono.className} text-gray-300`}>
      <Header
        heading="Settings "
        subHeading="System configuration "
        button={false}
        // buttonText=""
      />
      <main className="px-4"></main>
    </div>
  );
}
