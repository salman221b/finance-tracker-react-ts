import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useTransactionStore } from "../../store/transactionStore";

const ExpenseChart = () => {
  const transactions =
    useTransactionStore(
      (state) => state.transactions
    );

  const income =
    transactions
      .filter(
        (t) => t.type === "income"
      )
      .reduce(
        (sum, t) => sum + t.amount,
        0
      );

  const expense =
    transactions
      .filter(
        (t) => t.type === "expense"
      )
      .reduce(
        (sum, t) => sum + t.amount,
        0
      );

  const data = [
    {
      name: "Income",
      value: income,
    },
    {
      name: "Expense",
      value: expense,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl">
      <h2 className="text-xl font-bold mb-5">
        Financial Overview
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
            >
              <Cell fill="#22c55e" />

              <Cell fill="#ef4444" />
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseChart;