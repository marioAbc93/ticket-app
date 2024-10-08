import { useEffect, useState } from "react";
import Table from "../components/table";
import ViewTitle from "../components/view-title";
import { Event, EventResponse } from "../models/entities"; // Asegúrate de importar el tipo Event
import { useModal } from "../models/context/useModal";
import CreateEvent from "../components/modals/create-event";
import Modal from "../components/modal";
import { useNotification } from "../models/context/useNotification";
import UpdateEvent from "../components/modals/update-event";
import DeleteEventConfirm from "../components/modals/delete-event-confirm";
import { getAllEvents } from "../services";

export default function Events() {
  const [eventData, setEventData] = useState<EventResponse | null>(null);
  const { setOpen, setContent, reload } = useModal();
  const { getSuccess } = useNotification();
  const [currentPage, setCurrentPage] = useState(1);

  const handleFetch = (page = 1) => {
    getAllEvents(page).then((res: EventResponse) => {
      setEventData(res);
      getSuccess("Información obtenida correctamente");
    });
  };

  useEffect(() => {
    handleFetch(currentPage);
  }, [currentPage, reload]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const headers = [
    { key: "name", label: "Nombre del Evento" },
    { key: "date", label: "Fecha de evento" },
    { key: "ticket_value", label: "Valor/ticket" },
    { key: "available_tickets", label: "Disponibles" },
  ];

  const handleCreate = () => {
    setContent(<CreateEvent />);
    setOpen(true);
  };

  const handleUpdate = (item: Event) => {
    setContent(<UpdateEvent item={item} />);
    setOpen(true);
  };

  const handleDestroy = (item: Event) => {
    setContent(<DeleteEventConfirm id={item.id} />);
    setOpen(true);
  };

  const actions = [
    {
      label: "view",
      handler: (item: Event) => {
        alert(`Hola, soy ${item.name}`);
      },
    },
    {
      label: "update",
      handler: (item: Event) => {
        handleUpdate(item);
      },
    },
    {
      label: "delete",
      handler: (item: Event) => {
        handleDestroy(item);
      },
    },
  ];

  return (
    <>
      <ViewTitle title="Nuestros Eventos" />
      <Table
        searchBar={true}
        placeholder="Filtra por evento"
        buttonLabel="Crear evento"
        buttonAction={handleCreate}
        headers={headers}
        data={eventData?.events || []}
        total_pages={eventData?.total_pages || 1}
        current_page={currentPage}
        onPageChange={handlePageChange}
        actions={actions}
      />
      <Modal />
    </>
  );
}
