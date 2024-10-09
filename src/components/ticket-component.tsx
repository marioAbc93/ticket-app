import { useEffect, useState } from "react";
import { getTicket } from "../services";
import { useParams } from "react-router-dom";
import { useNotification } from "../models/context/useNotification";
import Loader from "./loader";

interface TicketData {
  event_name: string;
  full_name: string;
  date: string;
  qr_code: string;
}

export default function TicketComponent() {
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { getSuccess } = useNotification();
  const { id } = useParams();

  const handleFetch = async (id: number) => {
    try {
      const res = await getTicket(id);
      setTicketData(res.ticket);
      getSuccess("Información obtenida correctamente");
    } catch (error) {
      console.error("Error fetching ticket data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      handleFetch(Number(id));
    }
  }, [id]);

  console.log(ticketData);

  if (loading) {
    return <Loader />;
  }

  if (!ticketData) {
    return <div>No se encontró información del ticket.</div>;
  }

  return (
    <div className="w-full h-screen bg-slate-100 p-4 flex justify-center items-center">
      <div className="flex flex-col rounded-xl shadow-lg w-[350px] h-max">
        <div className="p-4 rounded-t-xl h-[200px] flex items-center bg-blue-200">
          <h4 className="text-blue-900 text-3xl font-bold">
            {ticketData.event_name}
          </h4>
        </div>
        <div className="border-slate-700 border-t-2">
          <div className="flex flex-col justify-between h-[300px] items-center rounded-b-xl bg-white p-4">
            <table className="w-full">
              <tbody>
                <tr className="flex justify-between">
                  <td>Nombre del cliente</td>
                  <td>Fecha del evento</td>
                </tr>
                <tr className="flex justify-between">
                  <td>{ticketData.full_name}</td>
                  <td>{ticketData.date}</td>
                </tr>
              </tbody>
            </table>
            <img
              src={ticketData.qr_code}
              className="border-4 rounded-lg w-36 h-36 border-white mt-4"
              alt="QR Code"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
