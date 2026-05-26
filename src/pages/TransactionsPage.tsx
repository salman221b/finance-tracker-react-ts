import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import TransactionList from "../components/TransactionList";

import TransactionForm from "../components/forms/TransactionForm";

import FloatingAddButton from "../components/FloatingAddButton";

import Modal from "../components/ui/Modal";

const TransactionsPage = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">
          Transactions
        </h1>

        <TransactionList />

        <FloatingAddButton
          onClick={() =>
            setIsOpen(true)
          }
        />

        <Modal
          isOpen={isOpen}
          onClose={() =>
            setIsOpen(false)
          }
        >
          <h2 className="text-2xl font-bold mb-5">
            Add Transaction
          </h2>

          <TransactionForm
            onSuccess={() =>
              setIsOpen(false)
            }
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default TransactionsPage;