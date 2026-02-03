"use client";

import { Container } from "@/components/container/container";
import { ModeToggle } from "@/layouts/main-layout/components/header/components/mode-toggle/mode-toggle";
import { NavList } from "@/layouts/main-layout/components/header/components/nav-list/nav-list";
import { NavLink } from "@/types/nav-link";
import { CodeXml, Facebook, Github } from "lucide-react";
import Link from "next/link";

const NAV_LINKS: NavLink[] = [
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

export function Header() {
  return (
    <header className="fixed z-40 top-0 left-0 right-0 supports-backdrop-blur:bg-background/90 bg-background/40 backdrop-blur-lg py-4">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-16">
            <Link href="/" className="flex items-center gap-x-2">
              <CodeXml size={24} />
              <span className="text-[24px] uppercase font-bold">DevT</span>
            </Link>
            <NavList data={NAV_LINKS} />
          </div>
          <div className="flex items-center gap-x-4">
            <Link
              href="https://github.com/TaiLe1101"
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2 rounded-md transition-all hover:bg-black/5 hover:dark:bg-white/5 dark:text-white/70"
            >
              <Github size={16} />
            </Link>
            <Link
              href="https://facebook.com/TaiLe1101"
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2 rounded-md transition-all hover:bg-black/5 hover:dark:bg-white/5 dark:text-white/70"
            >
              <Facebook size={16} />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
