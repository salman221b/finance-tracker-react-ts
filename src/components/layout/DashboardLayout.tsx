import { useState } from "react";

import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

import Navbar from "./Navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="flex-1">
        <Navbar
          setIsOpen={setIsOpen}
        />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;