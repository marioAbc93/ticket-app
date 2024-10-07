import axios from "axios";
import { EventNameResponse } from "../models/entities";

const getEventsName = async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/events-name`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response: EventNameResponse = await axios
    .get(apiUrl, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { ok: false, message: error.message };
    });
  return response;
};

export default getEventsName;
