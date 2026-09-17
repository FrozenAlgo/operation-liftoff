"use client"; // This forces Next.js to handle this component on the client side

import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Function to generate your specific string format
    const getFormattedTime = () => {
      const now = new Date();
      const timeString = now.toISOString().slice(11, 19);
      return timeString;
    };

    // Set the initial time immediately on browser load
    setTime(getFormattedTime());

    // Set up a loop to change the time state every second
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    // Clean up the memory loop if the user leaves the page
    return () => clearInterval(interval);
  }, []);

  // Prevent rendering text until the client side is mounted
  if (!time) return <span className="animate-pulse">Loading clock...</span>;

  return <span className=" ">{time}</span>;
}
