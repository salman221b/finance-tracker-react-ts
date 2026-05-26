import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  amount: string;
  icon: LucideIcon;
}

const StatCard = ({ title, amount, icon: Icon }: StatCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border-slate-200 dark:border-slate-800">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400">{title}</p>

          <h3 className="text-2xl font-bold mt-2">{amount}</h3>
        </div>

        <div className="bg-white dark:bg-slate-900 p-3 rounded-xl">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
