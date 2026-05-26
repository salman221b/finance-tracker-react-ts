import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useTransactionStore } from "../../store/transactionStore";

import { getMonthlyExpenses } from "../../lib/monthlyAnalytics";

const MonthlyBarChart = () => {
  const transactions =
    useTransactionStore(
      (state) => state.transactions
    );

  const data =
    getMonthlyExpenses(
      transactions
    );

  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl">
      <h2 className="text-xl font-bold mb-5">
        Monthly Expenses
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis
              dataKey="month"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="amount"
              radius={[
                8,
                8,
                0,
                0,
              ]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyBarChart;