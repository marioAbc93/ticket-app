import { Ticket } from "../../models/entities";
import { useModal } from "../../models/context/useModal";

interface ViewQrProps {
  item: Ticket;
}
export default function ViewQr({ item }: ViewQrProps) {
  const { setOpen } = useModal();

  return (
    <div className="p-4 flex flex-col justify-center items-center gap-4">
      <h3>Lee el siguiente código QR para ver tu ticket</h3>
      <img src={item.qr_code} alt="ticket-qr" />
      <span>
        O ver{" "}
        <a href={`/evento/${item.event_id}/ticket/${item.id}`} target="_blank">
          aqui
        </a>{" "}
      </span>
      <button
        onClick={() => {
          setOpen(false);
        }}
        className="p-4 w-full outline rounded text-blue-600 hover:text-white hover:bg-red-400"
      >
        Salir
      </button>
    </div>
  );
}
