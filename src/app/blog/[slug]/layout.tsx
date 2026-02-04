import { ReactNode } from "react";

interface DetailBlogLayoutProps {
  children: ReactNode;
}

export default function DetailBlogLayout({ children }: DetailBlogLayoutProps) {
  return <>{children}</>;
}
