import { useForm, type SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  transactionSchema,
  type TransactionFormData,
} from "../../schemas/transactionSchema";

import { useTransactionStore } from "../../store/transactionStore";

const categories = ["Salary", "Food", "Travel", "Shopping", "Bills"];
interface Props {
  onSuccess?: () => void;
}

const TransactionForm = ({ onSuccess }: Props) => {
  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),

    defaultValues: {
      title: "",
      amount: undefined,
      category: "",
      type: "expense",
    },
  });

  const onSubmit: SubmitHandler<TransactionFormData> = (data) => {
    addTransaction({
      id: crypto.randomUUID(),

      ...data,

      createdAt: new Date().toISOString(),
    });

    reset();
    onSuccess?.();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-slate-900 p-5 rounded-xl"
    >
      <input
        {...register("title")}
        placeholder="Title"
        className="w-full p-3 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 mb-1"
      />

      <p className="text-red-400 text-sm mb-2">{errors.title?.message}</p>

      <input
        type="number"
        {...register("amount", {
          valueAsNumber: true,
        })}
        placeholder="Amount"
        className="w-full p-3 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 mb-1"
      />

      <p className="text-red-400 text-sm mb-2">{errors.amount?.message}</p>

      <select
        {...register("category")}
        className="w-full p-3 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 mb-3"
      >
        <option value="">Select category</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        {...register("type")}
        className="w-full p-3 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700"
      >
        <option value="income">Income</option>

        <option value="expense">Expense</option>
      </select>

      <button className="w-full mt-5 p-3 rounded bg-blue-600 hover:bg-blue-700 text-white transition">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
