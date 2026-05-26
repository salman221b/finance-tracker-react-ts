import type { Transaction } from "../types/transaction";

export const getMonthlyExpenses = (
  transactions: Transaction[]
) => {
  const monthlyData: Record<
    string,
    number
  > = {};

  transactions.forEach(
    (transaction) => {
      if (
        transaction.type ===
        "expense"
      ) {
        const month =
          new Date(
            transaction.createdAt
          ).toLocaleString(
            "default",
            {
              month: "short",
            }
          );

        monthlyData[month] =
          (monthlyData[
            month
          ] || 0) +
          transaction.amount;
      }
    }
  );

  return Object.entries(
    monthlyData
  ).map(
    ([month, amount]) => ({
      month,
      amount,
    })
  );
};