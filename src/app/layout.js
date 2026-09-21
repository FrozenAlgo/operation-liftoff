// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PreFlightPage from "./pre-flight/page";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Initialize the font

export const metadata = {
  title: "Operation Liftoff",
  description: "First next app",
};

const IS_MAINTENANCE_MODE = true;
export default function RootLayout({ children }) {
  if (IS_MAINTENANCE_MODE) {
    return (
      <html lang="en" className={` h-full antialiased`}>
        <body className="min-h-full flex flex-col" suppressHydrationWarning>
          <PreFlightPage />
        </body>
      </html>
    );
  } else {
    return (
      <html lang="en" className={` h-full antialiased`}>
        <body className="min-h-full flex flex-col" suppressHydrationWarning>
          {children}
        </body>
      </html>
    );
  }
}
