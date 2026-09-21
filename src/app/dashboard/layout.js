import Navbar from "@/components/navbar";
import { StarfieldBackground } from "@/components/styleElements/starfieldBackground";

export default function DashboardLayout({ children }) {
  return (
    <main className="relative ">
      {/* background  */}
      <StarfieldBackground className="opacity-80" />
      <div className="absolute opacity-75 bg-[radial-gradient(circle_at_15%_5%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(168,85,247,0.12),transparent_30%),linear-gradient(180deg,#0a0a16_0%,#0c0c1d_50%,#0a0a16_100%)] min-h-screen bg-fixed w-full"></div>
      <div className="relative z-20 ">
        {/* permanent navbar in laoyout */}
        <Navbar />
        {/* main page content  */}

        <div className="p-4">{children}</div>
      </div>
    </main>
  );
}
