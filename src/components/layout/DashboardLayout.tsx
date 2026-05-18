import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6 bg-slate-950 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;