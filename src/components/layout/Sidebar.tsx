import {
  LayoutDashboard,
  Wallet,
  PieChart,
  X,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;

  setIsOpen: (
    value: boolean
  ) => void;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },

  {
    title: "Transactions",
    icon: Wallet,
    path: "/transactions",
  },

  {
    title: "Analytics",
    icon: PieChart,
    path: "/analytics",
  },
];

const Sidebar = ({
  isOpen,
  setIsOpen,
}: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="
          fixed
          inset-0
          bg-black/50
          z-40
          md:hidden
          "
          onClick={() =>
            setIsOpen(false)
          }
        />
      )}

      <aside
        className={`
        fixed
        md:static
        top-0
        left-0
        z-50

        h-screen
        w-64

        bg-slate-900
        border-r
        border-slate-800

        p-5

        transform
        transition-transform

        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        md:translate-x-0
      `}
      >
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold">
            Finance Tracker
          </h1>

          <button
            className="md:hidden"
            onClick={() =>
              setIsOpen(false)
            }
          >
            <X />
          </button>
        </div>

        <nav className="space-y-3">
          {menuItems.map(
            (item) => (
              <NavLink
                key={
                  item.title
                }
                to={item.path}
                onClick={() =>
                  setIsOpen(false)
                }
                className={({
                  isActive,
                }) =>
                  `
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-lg
                  transition

                  ${
                    isActive
                      ? "bg-blue-600"
                      : "hover:bg-slate-800"
                  }
                `
                }
              >
                <item.icon
                  size={20}
                />

                <span>
                  {item.title}
                </span>
              </NavLink>
            )
          )}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;