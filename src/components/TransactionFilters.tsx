import { useState } from "react";

interface Props {
  onSearch: (value: string) => void;

  onFilter: (
    value:
      | "all"
      | "income"
      | "expense"
  ) => void;
}

const TransactionFilters = ({
  onSearch,
  onFilter,
}: Props) => {
  const [selected, setSelected] =
    useState<
      "all" | "income" | "expense"
    >("all");

  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <input
        placeholder="Search transaction..."
        onChange={(e) =>
          onSearch(
            e.target.value
          )
        }
        className="flex-1 p-3 rounded bg-slate-900"
      />

      <select
        value={selected}
        onChange={(e) => {
          const value =
            e.target
              .value as
              | "all"
              | "income"
              | "expense";

          setSelected(
            value
          );

          onFilter(
            value
          );
        }}
        className="p-3 rounded bg-slate-900"
      >
        <option value="all">
          All
        </option>

        <option value="income">
          Income
        </option>

        <option value="expense">
          Expense
        </option>
      </select>
    </div>
  );
};

export default TransactionFilters;