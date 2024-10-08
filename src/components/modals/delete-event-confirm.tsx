import { useModal } from "../../models/context/useModal";
import { useNotification } from "../../models/context/useNotification";
import { deleteEvent } from "../../services";

type DeleteEventConfirmProps = {
  id: number;
};

export default function DeleteEventConfirm({ id }: DeleteEventConfirmProps) {
  const { setOpen, setReload } = useModal();
  const { getError, getSuccess } = useNotification();

  const handleDelete = async () => {
    try {
      await deleteEvent(id);
      getSuccess("Evento eliminado exitosamente");
      setReload(true);
      setOpen(false);
    } catch (error) {
      getError("Ocurrió un error al eliminar el evento");
      console.error("Error al eliminar el evento:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center p-4 items-center">
      <h3>¿Seguro(a) que deseas eliminar este evento?</h3>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => {
            setOpen(false);
          }}
          className="text-white font-bold bg-blue-600 px-4 py-2 rounded-md  active:scale-95"
        >
          Cancelar
        </button>
        <button
          onClick={handleDelete}
          className="outline text-blue-600 font-bold hover:outline-none hover:bg-red-400 hover:text-white px-4 py-2 rounded-md ml-4  active:scale-95"
        >
          Sí, eliminar
        </button>
      </div>
    </div>
  );
}
