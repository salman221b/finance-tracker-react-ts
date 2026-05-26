import { Menu } from "lucide-react";

interface NavbarProps {
  setIsOpen: (
    value: boolean
  ) => void;
}

const Navbar = ({
  setIsOpen,
}: NavbarProps) => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 px-6 flex items-center justify-between">
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

      <div className="w-10 h-10 rounded-full bg-slate-700" />
    </header>
  );
};

export default Navbar;