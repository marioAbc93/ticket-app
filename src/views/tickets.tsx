import { useEffect, useState } from "react";
import Table from "../components/table";
import ViewTitle from "../components/view-title";
import { Ticket, TicketResponse } from "../models/entities";
import { useNotification } from "../models/context/useNotification";
import { getAllTickets } from "../services";
import ViewQr from "../components/modals/view-qr";
import { useModal } from "../models/context/useModal";
import Modal from "../components/modal";

export default function Tickets() {
  const [ticketData, setTicketData] = useState<TicketResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { setOpen, setContent } = useModal();
  const { getSuccess } = useNotification();

  const handleFetch = (page = 1) => {
    getAllTickets(page).then((res: TicketResponse) => {
      setTicketData(res);
      getSuccess("Información obtenida correctamente");
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

  const handleViewQr = (item: Ticket) => {
    setContent(<ViewQr item={item} />);
    setOpen(true);
  };

  const actions = [
    {
      label: "view",
      handler: (item: Ticket) => {
        handleViewQr(item);
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
      <Modal />
    </>
  );
}
