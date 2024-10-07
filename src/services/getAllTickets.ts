import axios from "axios";
import { TicketResponse } from "../models/entities";

const getAllTickets = async (page: number) => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/tickets?page=${page}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response: TicketResponse = await axios
    .get(apiUrl, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { ok: false, message: error.message };
    });
  return response;
};

export default getAllTickets;
