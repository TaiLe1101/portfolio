"use client";

import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export interface BackgroundModeProps {
  children: ReactNode;
}

export function BackgroundMode({ children }: BackgroundModeProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="py-20 min-h-screen w-full bg-black relative">
        {/* Deep Ocean Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return resolvedTheme === "dark" ? (
    <div className="py-20 min-h-screen w-full bg-black relative">
      {/* Deep Ocean Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  ) : (
    <div className="py-20 min-h-screen w-full relative bg-white">
      {/* Cool Blue Glow Right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
