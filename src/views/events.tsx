import { useEffect, useState } from "react";
import Table from "../components/table";
import ViewTitle from "../components/view-title";
import { EventResponse } from "../models/entities";
import getAllEvents from "../services/getAllEvents";

export default function Events() {
  const [eventData, setEventData] = useState<EventResponse | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const handleFetch = (page = 1) => {
    getAllEvents(page).then((res: EventResponse) => {
      setEventData(res);
    });
  };

  useEffect(() => {
    handleFetch(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const headers = [
    { key: "name", label: "name" },
    { key: "date", label: "Fecha de evento" },
    { key: "ticket_value", label: "Valor/ticket" },
    { key: "available_tickets", label: "Disponibles" },
  ];

  const handleCreate = () => {
    alert("hola");
  };

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
    </>
  );
}
