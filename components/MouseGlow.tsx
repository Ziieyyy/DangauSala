"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <div 
        className="absolute w-[30vw] h-[30vw] -translate-x-1/2 -translate-y-1/2 bg-highlight/5 rounded-full blur-[100px] transition-transform duration-200 ease-out"
        style={{
          left: "var(--x, -100%)",
          top: "var(--y, -100%)",
        }}
      />
    </div>
  );
}
