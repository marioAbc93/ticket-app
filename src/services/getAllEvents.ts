import axios from "axios";
import { EventResponse } from "../models/entities";

const getAllEvents = async (page: number) => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/events?page=${page}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response: EventResponse = await axios
    .get(apiUrl, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { ok: false, message: error.message };
    });
  return response;
};

export default getAllEvents;
