import axios, { AxiosResponse } from "axios";
import {
  AvailableEventSummaryResponse,
  EventNameResponse,
  EventResponse,
  TicketResponse,
  Event,
  Ticket,
} from "../models/entities";

export const getAllEvents = async (page: number) => {
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

export const getAllList = async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/events/get-all`;

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

export const getAllTickets = async (page: number) => {
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

export const getEventsName = async () => {
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

export const saveEvent = async (
  data: Event
): Promise<EventResponse | undefined> => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/events`;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(apiUrl, data, config);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateEvent = async (
  id: number,
  data: Event
): Promise<EventResponse | undefined> => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/events/${id}`;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.put(apiUrl, data, config);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteEvent = async (id: number) => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/events/${id}`;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.delete(apiUrl, config);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSummary = async () => {
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

export const buyTicket = async (
  eventId: number,
  data: Ticket
): Promise<AxiosResponse> => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/events/${eventId}/buy`;

  const response = await axios.post(apiUrl, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
