import { cn } from "@/helpers/cn/cn";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  classname?: string;
}

export function NavLink({
  href,
  children,
  active = false,
  classname,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 rounded-md transition-all",
        `${
          active
            ? "bg-black/10 dark:bg-white/10 dark:text-white font-medium"
            : "hover:bg-black/5 hover:dark:bg-white/5 dark:text-white/70"
        }`,
        classname,
      )}
    >
      {children}
    </Link>
  );
}
