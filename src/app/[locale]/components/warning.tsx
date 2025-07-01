'use client'
import { useEffect, useState } from "react";



export default function ConstructionBanner() {
  const [show] = useState(true);

  useEffect(() => {
    // Optionally, auto-hide after a few seconds
    // const timer = setTimeout(() => setShow(false), 8000);
    // return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 flex justify-center"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="bg-yellow-200 text-yellow-900 px-6 py-2 rounded-b shadow-md text-center text-sm font-semibold"
        style={{ pointerEvents: "auto" }}
      >
        ️ Ce site est en cours de construction.
      </div>
    </div>
  );
}