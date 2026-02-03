"use client";

import { TypeAnimation } from "react-type-animation";

export function TypingText() {
  return (
    <div className="bg-black/10 dark:bg-white/50 px-4 py-2 rounded-md w-fit">
      <TypeAnimation
        sequence={[
          "Frontend",
          1000,
          "Backend",
          1000,
          "DevOps",
          1000,
          "Mobile",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-blue-500 dark:text-blue-700"
      />
    </div>
  );
}
