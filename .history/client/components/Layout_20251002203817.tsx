import { ReactNode } from "react";

import TopMost from "../components/TopMost";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
   
      <main className="flex-1">{children}</main>
    
    </div>
  );
}
