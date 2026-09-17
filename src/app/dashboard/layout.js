import Navbar from "@/components/navbar";
import { StarfieldBackground } from "@/components/starfieldBackground";

export default function DashboardLayout({ children }) {
  return (
    <main>
      {/* background  */}
      <StarfieldBackground />
      <div className="relative z-20 ">
        {/* permanent navbar in laoyout */}
        <Navbar />
        {/* main page content  */}

        <div className="p-8">{children}</div>
      </div>
    </main>
  );
}
