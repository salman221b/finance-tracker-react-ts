import DashboardLayout from "../components/layout/DashboardLayout";

import ExpenseChart from "../components/charts/ExpenseChart";

import MonthlyBarChart from "../components/charts/MonthlyBarChart";

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <ExpenseChart />

        <MonthlyBarChart />
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;