"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GenerateLogoBrandProps {
  darkLogoUrl: string;
  lightLogoUrl: string;
  width: number;
  height: number;
}

export function GenerateLogoBrand({
  darkLogoUrl,
  lightLogoUrl,
  height,
  width,
}: GenerateLogoBrandProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        draggable={false}
        src={lightLogoUrl}
        alt="Logo"
        width={width}
        height={height}
      />
    );
  }

  return resolvedTheme === "dark" ? (
    <Image
      draggable={false}
      src={darkLogoUrl}
      alt="Logo"
      width={width}
      height={height}
    />
  ) : (
    <Image
      draggable={false}
      src={lightLogoUrl}
      alt="Logo"
      width={width}
      height={height}
    />
  );
}
