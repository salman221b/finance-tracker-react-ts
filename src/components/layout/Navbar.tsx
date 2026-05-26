import { Menu } from "lucide-react";
import {
  Moon,
  Sun,
} from "lucide-react";

import { useThemeStore } from "../../store/themeStore";
interface NavbarProps {
  setIsOpen: (
    value: boolean
  ) => void;
}

const Navbar = ({
  setIsOpen,
}: NavbarProps) => {
  const {
  theme,
  toggleTheme,
} = useThemeStore();
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          className="md:hidden"
          onClick={() =>
            setIsOpen(true)
          }
        >
          <Menu />
        </button>

        <h2 className="text-xl font-semibold">
          Finance Tracker
        </h2>
      </div>

      <div className="flex items-center gap-3">
  <button
    onClick={toggleTheme}
    className="
    p-2
    rounded-lg

    bg-slate-200
    dark:bg-slate-800

    transition
  "
  >
    {theme === "dark" ? (
      <Sun size={18} />
    ) : (
      <Moon size={18} />
    )}
  </button>

  <div
    className="
    w-10
    h-10
    rounded-full

    bg-slate-300
    dark:bg-slate-700
  "
  />
</div>
    </header>
  );
};

export default Navbar;