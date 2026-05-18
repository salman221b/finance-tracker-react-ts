import { Trash2 } from "lucide-react";

import { useTransactionStore } from "../store/transactionStore";

import { formatDate } from "../lib/formatDate";

const TransactionList = () => {
  const {
    transactions,
    deleteTransaction,
  } = useTransactionStore();

  return (
    <div className="bg-slate-900 rounded-2xl p-5">
      <h2 className="text-xl font-bold mb-5">
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-slate-400">
          No transactions yet
        </p>
      ) : (
        <div className="space-y-3">
          {transactions.map(
            (transaction) => (
              <div
                key={
                  transaction.id
                }
                className="
                flex
                justify-between
                items-center
                bg-slate-800
                p-4
                rounded-xl
                "
              >
                <div>
                  <h3 className="font-semibold">
                    {
                      transaction.title
                    }
                  </h3>

                  <p className="text-sm text-slate-400">
                    {
                      transaction.category
                    }
                    {" • "}
                    {formatDate(
                      transaction.createdAt
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <span
                    className={`font-bold ${
                      transaction.type ===
                      "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.type ===
                    "income"
                      ? "+"
                      : "-"}

                    ₹
                    {
                      transaction.amount
                    }
                  </span>

                  <button
                  className="cursor-pointer text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                    onClick={() =>
                      deleteTransaction(
                        transaction.id
                      )
                    }
                  >
                    <Trash2
                      size={18}
                    />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionList;