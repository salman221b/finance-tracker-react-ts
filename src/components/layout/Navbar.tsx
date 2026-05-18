const Navbar = () => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-700" />
      </div>
    </header>
  );
};

export default Navbar;