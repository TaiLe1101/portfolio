"use client";

import { BackgroundGridDark } from "@/app/components/hero/components/background-grid/components/background-grid-dark/background-grid-dark";
import { BackgroundGridLight } from "@/app/components/hero/components/background-grid/components/background-grid-light/background-grid-light";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export interface BackgroundGridProps {
  children: ReactNode;
}

export function BackgroundGrid({ children }: BackgroundGridProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <BackgroundGridDark>{children}</BackgroundGridDark>;
  }

  return resolvedTheme === "dark" ? (
    <BackgroundGridDark>{children}</BackgroundGridDark>
  ) : (
    <BackgroundGridLight>{children}</BackgroundGridLight>
  );
}
