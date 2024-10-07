import { useEffect, useState } from "react";
import Table from "../components/table";
import ViewTitle from "../components/view-title";
import getAllTickets from "../services/getAllTickets";
import { Ticket, TicketResponse } from "../models/entities";

export default function Tickets() {
  const [ticketData, setTicketData] = useState<TicketResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFetch = (page = 1) => {
    getAllTickets(page).then((res: TicketResponse) => {
      setTicketData(res);
    });
  };

  useEffect(() => {
    handleFetch(currentPage);
  }, [currentPage]);

  const headers = [
    { key: "full_name", label: "Cliente" },
    { key: "customer_mail", label: "Correo" },
    { key: "event_name", label: "Evento" },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const actions = [
    {
      label: "view",
      handler: (item: Ticket) => {
        alert(`hola, soy ${item}`);
      },
    },
  ];

  return (
    <>
      <ViewTitle title="Consolidado de tickets" />
      <Table
        headers={headers}
        data={ticketData?.tickets || []}
        searchBar={false}
        total_pages={ticketData?.total_pages || 1}
        current_page={currentPage}
        onPageChange={handlePageChange}
        actions={actions}
      />
    </>
  );
}
