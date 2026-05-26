import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;

  onClose: () => void;

  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center
      z-50
    "
      onClick={onClose}
    >
      <div
        className="
        bg-white dark:bg-slate-900
        rounded-2xl
        p-6
        w-full
        max-w-md
        mx-4
      "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
