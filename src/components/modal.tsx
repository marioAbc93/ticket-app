import { useModal } from "../models/context/useModal";

export default function Modal() {
  const { open, content } = useModal();
  if (!open) return null;

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-40 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div
        id="default-modal"
        className="relative p-4 w-full max-w-2xl max-h-full"
      >
        <div className="relative bg-white rounded-lg shadow">{content}</div>
      </div>
    </div>
  );
}
