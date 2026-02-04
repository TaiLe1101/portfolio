import { Footer } from "@/layouts/main-layout/components/footer/footer";
import { Header } from "@/layouts/main-layout/components/header/header";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="mt-17">{children}</main>
      <Footer />
    </>
  );
}
