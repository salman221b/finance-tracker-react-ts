import { useState } from "react";

import { Trash2 } from "lucide-react";

import { useTransactionStore } from "../store/transactionStore";

import { formatDate } from "../lib/formatDate";

import TransactionFilters from "./TransactionFilters";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useTransactionStore();

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = filter === "all" || transaction.type === filter;

    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5">
      <h2 className="text-xl font-bold mb-5">Transactions</h2>

      <TransactionFilters onSearch={setSearch} onFilter={setFilter} />

      <div className="space-y-3 mt-5">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="
              flex
              justify-between
              bg-white dark:bg-slate-900
              p-4
              rounded-xl
              "
          >
            <div>
              <h3>{transaction.title}</h3>

              <p className="text-sm text-slate-400">
                {transaction.category}
                {" • "}
                {formatDate(transaction.createdAt)}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <span
                className={`font-bold ${
                  transaction.type === "income"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                ₹{transaction.amount}
              </span>

              <button
                className="hover:text-red-400"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <Trash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
