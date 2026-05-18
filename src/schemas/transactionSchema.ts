import { z } from "zod";

export const transactionSchema = z.object({
  title: z
    .string()
    .min(3, "Title should have at least 3 characters"),

  amount: z
    .number()
    .positive("Amount must be greater than 0"),

  category: z
    .string()
    .min(1, "Please select a category"),

  type: z.enum([
    "income",
    "expense",
  ]),
});

export type TransactionFormData =
  z.infer<typeof transactionSchema>;