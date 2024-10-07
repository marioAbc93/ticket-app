import axios from "axios";
import { AvailableEventSummaryResponse } from "../models/entities";

const getSummary = async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/events/summary`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response: AvailableEventSummaryResponse = await axios
    .get(apiUrl, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { ok: false, message: error.message };
    });
  return response;
};

export default getSummary;
