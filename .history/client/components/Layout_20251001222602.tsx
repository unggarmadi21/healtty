import { ReactNode } from "react";
import Topmost from "./Topmost";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Topmost />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
