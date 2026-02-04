"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function CommentWithGithub() {
  const { theme } = useTheme();

  return (
    <div className="mt-12">
      <Giscus
        repo="TaiLe1101/portfolio"
        repoId="R_kgDORILBYw"
        category="Comments"
        categoryId="DIC_kwDORILBY84C12vg"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme === "dark" ? "dark" : "light"} // hoặc 'preferred_color_scheme'
        lang="vi"
        loading="lazy"
      />
    </div>
  );
}
