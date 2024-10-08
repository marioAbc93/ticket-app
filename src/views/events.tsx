import { useEffect, useState } from "react";
import Table from "../components/table";
import ViewTitle from "../components/view-title";
import { EventResponse } from "../models/entities";
import getAllEvents from "../services/getAllEvents";
import { useModal } from "../models/context/useModal";
import CreateEvent from "../components/create-event";
import Modal from "../components/modal";

export default function Events() {
  const [eventData, setEventData] = useState<EventResponse | null>(null);
  const { setOpen, setContent, reload } = useModal();
  const [currentPage, setCurrentPage] = useState(1);

  const handleFetch = (page = 1) => {
    getAllEvents(page).then((res: EventResponse) => {
      setEventData(res);
    });
  };

  useEffect(() => {
    handleFetch(currentPage);
  }, [currentPage, reload]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const headers = [
    { key: "name", label: "name" },
    { key: "date", label: "Fecha de evento" },
    { key: "ticket_value", label: "Valor/ticket" },
    { key: "available_tickets", label: "Disponibles" },
  ];

  const actions = [
    {
      label: "view",
      handler: (item: Event) => {
        alert(`hola, soy ${item}`);
      },
    },
    {
      label: "update",
      handler: (item: Event) => {
        alert(`hola, soy ${item}`);
      },
    },
    {
      label: "delete",
      handler: (item: Event) => {
        alert(`hola, soy ${item}`);
      },
    },
  ];

  const handleCreate = () => {
    setContent(<CreateEvent />);
    setOpen(true);
  };

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
