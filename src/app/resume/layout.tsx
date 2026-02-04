import { MainLayout } from "@/layouts/main-layout/main-layout";
import { ReactNode } from "react";

interface ResumeLayoutProps {
  children: ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
