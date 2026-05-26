import { Plus } from "lucide-react";

interface Props {
  onClick: () => void;
}

const FloatingAddButton = ({
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className="
      fixed
      bottom-6
      right-6

      w-16
      h-16

      rounded-full

      bg-blue-600
      hover:bg-blue-700

      flex
      items-center
      justify-center

      shadow-lg

      z-40
    "
    >
      <Plus size={28} />
    </button>
  );
};

export default FloatingAddButton;