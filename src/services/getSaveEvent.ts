/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Event, EventResponse } from "../models/entities";

const saveEvent = async (data: Event): Promise<EventResponse | undefined> => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/events`;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(apiUrl, data, config);

    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export default saveEvent;
