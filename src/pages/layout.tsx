import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen ">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
