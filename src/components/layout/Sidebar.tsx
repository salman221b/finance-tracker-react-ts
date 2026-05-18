import {
  LayoutDashboard,
  Wallet,
  PieChart,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Transactions",
    icon: Wallet,
  },
  {
    title: "Analytics",
    icon: PieChart,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">
        Finance Tracker
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.title}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <item.icon size={20} />
            <span>{item.title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;