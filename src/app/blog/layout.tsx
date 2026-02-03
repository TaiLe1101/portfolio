import { MainLayout } from "@/layouts/main-layout/main-layout";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
