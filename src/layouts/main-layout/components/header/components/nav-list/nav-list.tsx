"use client";

import { NavLink } from "@/layouts/main-layout/components/header/components/nav-link/nav-link";
import { NavLink as NavLinkType } from "@/types/nav-link";
import { usePathname } from "next/navigation";

interface NavListProps {
  data: NavLinkType[];
}

export function NavList({ data }: NavListProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav>
      <ul className="flex items-center gap-x-4">
        {data.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <NavLink href={link.href} active={active}>
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
