import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Transaction } from "../types/transaction";

interface TransactionState {
  transactions: Transaction[];

  addTransaction: (
    transaction: Transaction
  ) => void;

  deleteTransaction: (
    id: string
  ) => void;

  totalIncome: () => number;

  totalExpense: () => number;

  totalBalance: () => number;
}

export const useTransactionStore =
  create<TransactionState>()(
    persist(
      (set, get) => ({
        transactions: [],

        addTransaction: (
          transaction
        ) =>
          set((state) => ({
            transactions: [
              transaction,
              ...state.transactions,
            ],
          })),

        deleteTransaction: (
          id
        ) =>
          set((state) => ({
            transactions:
              state.transactions.filter(
                (t) =>
                  t.id !== id
              ),
          })),

        totalIncome: () =>
          get()
            .transactions
            .filter(
              (t) =>
                t.type ===
                "income"
            )
            .reduce(
              (
                sum,
                t
              ) =>
                sum +
                t.amount,
              0
            ),

        totalExpense: () =>
          get()
            .transactions
            .filter(
              (t) =>
                t.type ===
                "expense"
            )
            .reduce(
              (
                sum,
                t
              ) =>
                sum +
                t.amount,
              0
            ),

        totalBalance: () =>
          get().totalIncome() -
          get().totalExpense(),
      }),

      {
        name:
          "finance-storage",
      }
    )
  );