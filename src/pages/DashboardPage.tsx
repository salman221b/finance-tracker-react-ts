import DashboardLayout from "../components/layout/DashboardLayout";

import StatCard from "../components/ui/StatCard";

import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";

import { useTransactionStore } from "../store/transactionStore";

const DashboardPage = () => {
  const totalBalance = useTransactionStore((state) => state.totalBalance());

  const totalIncome = useTransactionStore((state) => state.totalIncome());

  const totalExpense = useTransactionStore((state) => state.totalExpense());

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5  ">
          
          <StatCard
            
            title="Balance"
            amount={`₹${totalBalance}`}
            icon={DollarSign}
          />

          <StatCard
            title="Income"
            amount={`₹${totalIncome}`}
            icon={TrendingUp}
          />

          <StatCard
            title="Expenses"
            amount={`₹${totalExpense}`}
            icon={TrendingDown}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
